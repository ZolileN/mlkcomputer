// API configuration
export const API_BASE_URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000'

export const API_ENDPOINTS = {
  CONTACT: '/api/contact',
}

// Environment
export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development'
export const IS_PRODUCTION = process.env.NODE_ENV === 'production'

// Feature flags
export const FEATURES = {
  CONTACT_FORM: true,
  ANALYTICS: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
}

// Default values
export const DEFAULTS = {
  PAGE_SIZE: 10,
  CACHE_TTL: 60 * 60 * 1000, // 1 hour in milliseconds
}
