import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "690626300241595b818ee801", 
  requiresAuth: false // Authentication not needed for public website
});
