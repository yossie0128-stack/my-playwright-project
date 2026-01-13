import { test, expect } from '@playwright/test';
import { DocsPage } from '../pages/DocPage';
import { InstallationPage } from '../pages/InstallationPage';


test('Playwright Document Page Verify to work install tabs', async ({ page }) => {
  const docPage = new DocsPage(page);

  await docPage.goTo();
  await docPage.goToInstallation();

  const installation = docPage.installation();
  await installation.checkInstallCodeSamplePackageTabs();

});

test('Playwright Document Page Verify to work run tabs', async ({ page }) => {
  const docPage = new DocsPage(page);
  
  await docPage.goTo();
  await docPage.goToInstallation();

  const installation = docPage.installation();
  await installation.checkRunSamplePackageTab();
});

test('Playwright Document Page Verify to work report tabs', async ({ page }) => {
  const docPage = new DocsPage(page);
  
  await docPage.goTo();
  await docPage.goToInstallation();

  const installation = docPage.installation();
  await installation.checkReportSamplePackageTab();
});

test('Playwright Document Page Verify to work test tabs', async ({ page }) => {
  const docPage = new DocsPage(page);
  
  await docPage.goTo();
  await docPage.goToInstallation();
  
  const installation = docPage.installation();
  await installation.checkTestSamplePackageTab();
  });

test('Playwright Document Page Verify to work update tabs', async ({ page }) => {
  const docPage = new DocsPage(page);
  
  await docPage.goTo();
  await docPage.goToInstallation();

  const installation = docPage.installation();
  await installation.checkUpdateSamplePackageTab();
  });

test('Playwright Document Page Verify to work version tabs', async ({ page }) => {
  const docPage = new DocsPage(page);
  
  await docPage.goTo();
  await docPage.goToInstallation();

  const installation = docPage.installation();
  await installation.checkVersionSamplePackageTab();
});

test('Playwright Document Page Verify to work copy button at install sec', async ({ page }) => {
  const docPage = new DocsPage(page);
  
  await docPage.goTo();
  await docPage.goToInstallation();
  
  const installation = docPage.installation();
  await installation.checkCopyButtonInstall();
  });

test('Playwright Document Page Verify to work copy button at run sec', async ({ page }) => {
  const docPage = new DocsPage(page);
  
  await docPage.goTo();
  await docPage.goToInstallation();
  
  const installation = docPage.installation();
  await installation.checkCopyButtonRun();
   });

test('Playwright Document Page Verify to work copy button at report sec', async ({ page }) => {
  const docPage = new DocsPage(page);
  
  await docPage.goTo();
  await docPage.goToInstallation();
  
  const installation = docPage.installation();
  await installation.checkCopyButtonReport();
   });

test('Playwright Document Page Verify to work copy button at test sec', async ({ page }) => {
  const docPage = new DocsPage(page);
  
  await docPage.goTo();
  await docPage.goToInstallation();
  
  const installation = docPage.installation();
  await installation.checkCopyButtonTest();
  });

test('Playwright Document Page Verify to work copy button at update sec', async ({ page }) => {
  const docPage = new DocsPage(page);
  
  await docPage.goTo();
  await docPage.goToInstallation();
  
  const installation = docPage.installation();
  await installation.checkCopyButtonUpdate();
  });

test('Playwright Document Page Verify to work copy button at version sec', async ({ page }) => {
  const docPage = new DocsPage(page);
  
  await docPage.goTo();
  await docPage.goToInstallation();
  
  const installation = docPage.installation();
  await installation.checkCopyButtonVersion();
  });

  test('Playwright Document of Left side bar Verify to work copy button at agent sec', async ({ page }) => {
  const docPage = new DocsPage(page);

  await docPage.goTo();
  await docPage.gotoAgents();

  const agents = docPage.agents();
  await agents.checkAgentsPageTab();
  });

  test('Playwright Document of Left side bar Verify to work copy button at writing tests sec', async ({ page }) => {
  const docPage = new DocsPage(page);

  await docPage.goTo();
  await docPage.goToWritingTest();

  const writingTest = docPage.writingTest();
  await writingTest.checkCodeBlock();
  });


  test('Playwright Document of Left side bar Verify to work copy button at runnning tests sec', async ({ page }) => {
  const docPage = new DocsPage(page);

  await docPage.goTo();
  await docPage.goToRunningTest();

  const runningTest =docPage.runningTest();
  await runningTest.checkCodeBlock();
  });

  test('Playwright Document of right side bar Verify to be visible assertion link at writing tests sec', async ({ page }) => {
  const docPage = new DocsPage(page);

  await docPage.goTo();
  await docPage.goToWritingTest();

  const rightSidebar = docPage.rightSidebar;
  await rightSidebar.checkAssertionLink();
  });

  test('Playwright Document of right side bar Verify assertion link to be scrollable at writing tests sec', async ({ page }) => {
  const docPage = new DocsPage(page);

  await docPage.goTo();
  await docPage.goToWritingTest();

  const rightSidebar = docPage.rightSidebar;
  await rightSidebar.checkAssertionScrollable();
  });

  test('Playwright Document of right side bar Verify link count to be greater than 3  at writing tests sec', async ({ page }) => {
  const docPage = new DocsPage(page);

  await docPage.goTo();
  await docPage.goToWritingTest();

  const rightSidebar = docPage.rightSidebar;
  await rightSidebar.checkLinkCount();
  });