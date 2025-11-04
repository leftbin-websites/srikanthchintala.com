import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client without authentication for public website
export const base44 = createClient({
  appId: "6909b2d600f0e7d397385fcc", 
  requiresAuth: false // Authentication not needed for public website
});
