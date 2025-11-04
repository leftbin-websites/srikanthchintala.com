import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client for public website (no authentication)
export const base44 = createClient({
  appId: "690a09d12036d6929a889991", 
  requiresAuth: false // Authentication not needed for public website
});
