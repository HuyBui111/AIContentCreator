# AI Content Creator

Ứng dụng web tạo nội dung sáng tạo bằng AI, sử dụng Next.js 14 và OpenRouter API. Được deploy tự động lên GitHub Pages.

<img width="1898" height="1079" alt="image" src="https://github.com/user-attachments/assets/4af6864a-1647-4356-b189-7269c048c412" />
<img width="1901" height="1072" alt="image" src="https://github.com/user-attachments/assets/af344d10-33a9-4187-90fc-a88575c038ba" />

## Tính năng

- 🎯 **3 loại nội dung**: Social Caption, Blog Intro, SEO Title
- 🤖 **AI thông minh**: Sử dụng GPT-3.5-turbo qua OpenRouter
- 📱 **Responsive**: Giao diện đẹp trên mọi thiết bị
- ⚡ **Nhanh chóng**: Tạo 3 phiên bản nội dung cùng lúc
- 📋 **Copy dễ dàng**: Sao chép kết quả chỉ với 1 click
- ✨ **Hiệu ứng mượt**: Animation fade-in cho kết quả
- 🚀 **Static deployment**: Hoạt động hoàn toàn trên GitHub Pages

## Cài đặt cho Development

1. **Clone và cài đặt dependencies:**
   ```bash
   cd AIContentCreator
   npm install
   ```

2. **Cấu hình API Key:**
   - Tạo tài khoản tại [OpenRouter](https://openrouter.ai/)
   - Tạo file `.env.local` và thêm API key:
   ```
   NEXT_PUBLIC_OPENROUTER_API_KEY=your_actual_api_key_here
   ```

3. **Chạy ứng dụng:**
   ```bash
   npm run dev
   ```

4. **Mở trình duyệt:** http://localhost:3000

## Deployment lên GitHub Pages

1. **Cấu hình GitHub Secrets:**
   - Vào Settings > Secrets and variables > Actions
   - Thêm secret: `OPENROUTER_API_KEY` với giá trị API key của bạn

2. **Push code lên GitHub:**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **GitHub Actions sẽ tự động:**
   - Build ứng dụng với static export
   - Deploy lên GitHub Pages
   - App sẽ có sẵn tại: `https://yourusername.github.io/AIContentCreator`

## Cách sử dụng

1. Nhập từ khóa hoặc chủ đề vào ô input
2. Chọn loại nội dung từ dropdown
3. Click "Tạo nội dung"
4. Xem 3 phiên bản kết quả và copy theo ý muốn

## Công nghệ sử dụng

- **Frontend**: Next.js 14 (App Router), React, TypeScript
- **Styling**: TailwindCSS
- **AI API**: OpenRouter (Google Gemma-2-9B)
- **Deployment**: Có thể deploy lên Vercel, Netlify

## Cấu trúc dự án

```
AIContentCreator/
├── app/
│   ├── api/generate/route.ts    # API endpoint
│   ├── globals.css              # Styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Main page
├── .env.local                   # Environment variables
├── package.json                 # Dependencies
├── tailwind.config.js           # Tailwind config
└── README.md                    # Documentation
```

## Lưu ý

- Cần API key hợp lệ từ OpenRouter
- Model sử dụng: `google/gemma-2-9b-it:free`
- Hỗ trợ tiếng Việt hoàn toàn
