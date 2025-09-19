// Base API URL configuration - empty string for relative URLs when using proxy
export const API_BASE_URL = '';

// Check if we're in development mode
export const IS_DEVELOPMENT = import.meta.env.DEV;

// API endpoints
export const API_ENDPOINTS = {
  CONTACT: '/api/contact',  // This will be proxied to your backend
};
