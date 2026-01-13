import { test, expect } from '@playwright/test';
import { PlayWright } from '../pages/PlayWright';
import { searchKeywords } from '../data/searchKeywords';

test('PlayWright training', async ({ page }) => {
  const playwright = new PlayWright(page);

  await playwright.goto();
    
});
