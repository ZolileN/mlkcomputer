// API configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

export const API_ENDPOINTS = {
  CONTACT: '/api/contact',
} as const;

// Environment
export const IS_DEVELOPMENT = import.meta.env.DEV;
export const IS_PRODUCTION = import.meta.env.PROD;

// Default values
export const DEFAULTS = {
  PAGE_SIZE: 10,
  CACHE_TTL: 60 * 60 * 1000, // 1 hour in milliseconds
} as const;
