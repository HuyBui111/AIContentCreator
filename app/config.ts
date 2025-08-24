// Configuration for API keys and environment variables
export const config = {
  openRouterApiKey: process.env.NEXT_PUBLIC_OPENROUTER_API_KEY || '',
  apiEndpoint: 'https://openrouter.ai/api/v1/chat/completions',
  model: 'openai/gpt-3.5-turbo'
}

// Check if API key is available
export const isApiKeyConfigured = () => {
  return config.openRouterApiKey && config.openRouterApiKey.length > 0
}
