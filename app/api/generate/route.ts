import { NextRequest, NextResponse } from 'next/server'

interface GenerateRequest {
  prompt: string
  type: string
}

const SYSTEM_PROMPT = `Bạn là một trợ lý AI thông minh và thân thiện. 
Nhiệm vụ của bạn:
1. Luôn trả lời bằng tiếng Việt tự nhiên, rõ ràng, ngắn gọn và dễ hiểu. 
2. Giữ giọng văn gần gũi, thân thiện, phù hợp với ngữ cảnh hội thoại. 
3. Nếu người dùng yêu cầu tạo nội dung (caption mạng xã hội, tiêu đề SEO, hoặc mở đầu blog):
   - Caption: ngắn, sáng tạo, có thể dùng emoji, không quá 2 câu.
   - Tiêu đề SEO: hấp dẫn, súc tích, dưới 60 ký tự.
   - Mở đầu blog: 2-3 câu, cuốn hút, giới thiệu khái quát nội dung.
   - Luôn đưa ra ít nhất 3 phiên bản khác nhau để người dùng chọn.
4. Nếu chưa hiểu ý người dùng, hãy lịch sự yêu cầu họ giải thích rõ hơn. 
5. Không được trả lời bằng tiếng Anh, trừ khi người dùng yêu cầu rõ ràng.`

export async function POST(request: NextRequest) {
  try {
    const { prompt, type }: GenerateRequest = await request.json()

    if (!prompt || !type) {
      return NextResponse.json(
        { error: 'Thiếu thông tin prompt hoặc type' },
        { status: 400 }
      )
    }

    const apiKey = process.env.OPENROUTER_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Chưa cấu hình API key' },
        { status: 500 }
      )
    }

    const userPrompt = `Hãy viết một ${type} cho chủ đề: ${prompt}`

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'http://localhost:3000',
        'X-Title': 'AI Content Creator',
      },
      body: JSON.stringify({
        model: 'openai/gpt-oss-20b',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful AI assistant. Always respond in clear, natural Vietnamese. Make answers concise, accurate, and easy to understand. If the user asks in English, you may respond in English, but default to Vietnamese.'
          },
          {
            role: 'user',
            content: userPrompt
          }
        ],
        temperature: 0.8,
        max_tokens: 500,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('OpenRouter API Error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData
      })
      
      let errorMessage = 'Lỗi từ OpenRouter API'
      if (response.status === 401) {
        errorMessage = 'API key không hợp lệ'
      } else if (response.status === 429) {
        errorMessage = 'Đã vượt quá giới hạn request'
      } else if (response.status === 400) {
        errorMessage = 'Yêu cầu không hợp lệ'
      }
      
      return NextResponse.json(
        { error: `${errorMessage} (${response.status})` },
        { status: response.status }
      )
    }

    const data = await response.json()
    const content = data.choices?.[0]?.message?.content

    if (!content) {
      return NextResponse.json(
        { error: 'Không nhận được phản hồi từ AI' },
        { status: 500 }
      )
    }

    // Parse the response to extract the 3 versions
    const results = parseAIResponse(content)

    return NextResponse.json({ results })

  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Lỗi server nội bộ' },
      { status: 500 }
    )
  }
}

function parseAIResponse(content: string): string[] {
  // Try to extract numbered list items (1., 2., 3.)
  const numberedMatches = content.match(/^\d+\.\s*(.+?)(?=^\d+\.|$)/gms)
  
  if (numberedMatches && numberedMatches.length >= 3) {
    return numberedMatches.slice(0, 3).map(match => 
      match.replace(/^\d+\.\s*/, '').trim()
    )
  }

  // Try to extract items with dashes or bullets
  const bulletMatches = content.match(/^[-*•]\s*(.+?)(?=^[-*•]|$)/gms)
  
  if (bulletMatches && bulletMatches.length >= 3) {
    return bulletMatches.slice(0, 3).map(match => 
      match.replace(/^[-*•]\s*/, '').trim()
    )
  }

  // Split by double newlines and filter meaningful content
  const parts = content
    .split(/\n\n+/)
    .map(part => part.trim())
    .filter(part => part.length > 15 && !part.match(/^(phiên bản|version)/i))

  if (parts.length >= 3) {
    return parts.slice(0, 3)
  }

  // Split by single newlines as fallback
  const lines = content
    .split(/\n/)
    .map(line => line.trim())
    .filter(line => line.length > 20 && !line.match(/^(phiên bản|version|\d+\.)/i))

  if (lines.length >= 3) {
    return lines.slice(0, 3)
  }

  // If we still can't parse, create variations manually
  const baseContent = content.trim()
  return [
    baseContent,
    baseContent + ' 🌟',
    baseContent + ' ✨'
  ]
}
