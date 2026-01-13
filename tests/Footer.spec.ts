import { test, expect } from '@playwright/test';
import { PlaywrightFooter } from '../pages/PlaywrightFooter';

test('Playwright footer training:GetStarted', async ({ page }) => {
  const pwFooter = new PlaywrightFooter(page);

  await pwFooter.goTo();
  await pwFooter.clickGetStarted();
  await expect(page).toHaveURL(/docs\/intro/);
 
});

test('Playwright footer training:LearnVideo', async ({ page }) => {
  const pwFooter = new PlaywrightFooter(page);

  await pwFooter.goTo();
  await pwFooter.clickLearnVideo();
  await expect(page).toHaveURL(/community\/learn-videos/);
 
});

test('Playwright footer training:FeatureVideo', async ({ page }) => {
  const pwFooter = new PlaywrightFooter(page);

  await pwFooter.goTo();
  await pwFooter.clickFeatureVideo();
await expect(page).toHaveURL(/community\/feature-videos/);
});

test('Playwright footer training:Ambassadors', async ({ page }) => {
  const pwFooter = new PlaywrightFooter(page);

  await pwFooter.goTo();
  await pwFooter.clickAmbassadors();
  await expect(page).toHaveURL(/community\/ambassadors/);

});

test('Playwright footer training:isOuterLinks', async ({ page }) => {
  const pwFooter = new PlaywrightFooter(page);

  await pwFooter.goTo();
  await pwFooter.isOuterLinks();


});