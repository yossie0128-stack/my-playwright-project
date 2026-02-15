import { Page, Locator, expect } from '@playwright/test';
import { docURL } from '../data/playWrightPageURL';
import { createSamplePackageTab,runSamplePackageTab,reportSamplePackageTab,testSamplePackageTab,updateSamplePackageTab,versionSamplePackageTab} from '../data/docPage';
import { TabCodeBlock } from '../components/TabCodeBlock';
import { BasePage } from './BasePage';

export class InstallationPage extends BasePage{

  readonly page: Page;
  readonly tab:  TabCodeBlock;
  
  constructor( page: Page ){
    super(page);
    this.page = page;
    this.tab  = new TabCodeBlock(page);
  }


async checkInstallCodeSamplePackageTabs() {
    await this.tab.checkTab(createSamplePackageTab,'npmyarnpnpmnpm init');
 }

async checkRunSamplePackageTab(){
    await this.tab.checkTab(runSamplePackageTab,'npmyarnpnpmnpx playwright testyarn playwright testpnpm exec playwright test');
}

async checkReportSamplePackageTab(){
    await this.tab.checkTab(reportSamplePackageTab,'npmyarnpnpmnpx playwright show-reportyarn playwright show-reportpnpm exec');
}

async checkTestSamplePackageTab(){
    await this.tab.checkTab(testSamplePackageTab,'npmyarnpnpmnpx playwright test --uiyarn playwright test --uipnpm exec');
}

async checkUpdateSamplePackageTab(){
    await this.tab.checkTab(updateSamplePackageTab,'npmyarnpnpmnpm install -D @');

}

async checkVersionSamplePackageTab(){
    await this.tab.checkTab(versionSamplePackageTab,'npmyarnpnpmnpx playwright --');
}

async checkCopyButtonInstall(){
    await this.tab.checkCopyButton(createSamplePackageTab,'npmyarnpnpmnpm init');
}

async checkCopyButtonRun(){
    await this.tab.checkCopyButton(runSamplePackageTab,'npmyarnpnpmnpx playwright testyarn playwright testpnpm exec playwright test');
}

async checkCopyButtonReport(){
    await this.tab.checkCopyButton(reportSamplePackageTab,'npmyarnpnpmnpx playwright show-reportyarn playwright show-reportpnpm exec');
}

async checkCopyButtonTest(){
    await this.tab.checkCopyButton(testSamplePackageTab,'npmyarnpnpmnpx playwright test --uiyarn playwright test --uipnpm exec');
}

async checkCopyButtonUpdate(){
    await this.tab.checkCopyButton(updateSamplePackageTab,'npmyarnpnpmnpm install -D @');
}

async checkCopyButtonVersion(){
    await this.tab.checkCopyButton(versionSamplePackageTab,'npmyarnpnpmnpx playwright --');

}
}