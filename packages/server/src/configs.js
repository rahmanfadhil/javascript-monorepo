export const isProd = process.env.NODE_ENV === 'production'
export const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:4000'

export const corsConfig = {
  origin: frontendUrl,
  credentials: 'include',
}

export const playgroundConfig = isProd
  ? false
  : { settings: { 'request.credentials': 'include' } }
