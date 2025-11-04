import { createClient } from '@base44/sdk';

// Create client for content management with public read access
export const base44 = createClient({
  appId: "6909b2d600f0e7d397385fcc", 
  requiresAuth: true,
  publicReadAccess: true // Allow public reading of content without login prompts
});
