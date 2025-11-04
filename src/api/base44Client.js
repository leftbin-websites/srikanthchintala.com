import { createClient } from '@base44/sdk';

// Create client for content management
export const base44 = createClient({
  appId: "6909b2d600f0e7d397385fcc", 
  requiresAuth: false
});
