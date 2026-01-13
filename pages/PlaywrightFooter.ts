import { Page, Locator, expect } from '@playwright/test';
import { uRL } from '../data/playWrightPageURL';

export class PlaywrightFooter {

    readonly getStarted: Locator;
    readonly learnVideo: Locator;
    readonly featureVideo: Locator;
    readonly ambassadors:Locator;

    readonly playWrightTraining: Locator;
    readonly stackOverflow: Locator;
    readonly discord: Locator;
    readonly twitter: Locator;
    readonly linkedIn: Locator;
    readonly github: Locator;
    readonly youtube: Locator;
    readonly blog: Locator;

    constructor(readonly page: Page) {
    this.getStarted = page.getByRole('link', { name: 'Getting started' });
    this.learnVideo = page.getByRole('link', { name: 'Learn Videos' });
    this.featureVideo = page.getByRole('link', { name: 'Feature Videos' });
    this.ambassadors = page.getByRole('link', { name: 'Ambassadors' });

    this.playWrightTraining = page.getByRole('link', { name: 'Playwright Training' });
    this.stackOverflow = page.getByRole('link', { name: 'Stack Overflow' });
    this.discord = page.getByRole('link', { name: 'Discord', exact: true });
    this.twitter = page.getByRole('link', { name: 'Twitter' });
    this.linkedIn = page.getByRole('link', { name: 'LinkedIn' });
    this.github = page.getByRole('link', { name: 'GitHub', exact: true });
    this.youtube = page.getByRole('link', { name: 'YouTube' });
    this.blog = page.getByRole('link', { name: 'Blog' });
}

async goTo(){
    await this.page.goto(uRL);
}

async clickGetStarted(){
    await this.getStarted.click();
}

async clickLearnVideo(){
    await this.learnVideo.click();
}

async clickFeatureVideo(){
    await this.featureVideo.click();
}

async clickAmbassadors(){
    await this.ambassadors.click();
}

async isOuterLinks() {
  await expect(this.playWrightTraining).toBeVisible();
  await expect(this.playWrightTraining).toHaveAttribute('href', /build-with-playwright/);

  await expect(this.stackOverflow).toBeVisible();
  await expect(this.stackOverflow).toHaveAttribute('href', /stackoverflow/);

  await expect(this.discord).toBeVisible();
  await expect(this.discord).toHaveAttribute('href', /discord/);
  
  await expect(this.twitter).toBeVisible();
  await expect(this.twitter).toHaveAttribute('href', /twitter/);

  await expect(this.linkedIn).toBeVisible();
  await expect(this.linkedIn).toHaveAttribute('href', /linkedin/);

  await expect(this.github).toBeVisible();
  await expect(this.github).toHaveAttribute('href', /github/);

  await expect(this.youtube).toBeVisible();
  await expect(this.youtube).toHaveAttribute('href', /youtube/);

  await expect(this.blog).toBeVisible();
  await expect(this.blog).toHaveAttribute('href', /playwright/);

}

}