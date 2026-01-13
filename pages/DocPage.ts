import { Page, Locator, expect } from '@playwright/test';
import { docURL } from '../data/playWrightPageURL';
import { LeftSidebar} from './DocPage/LeftSidebar';
import { RightSidebar} from './DocPage/RightSidebar';
import { InstallationPage } from './InstallationPage';
import { WritingTest } from './WritingTest';
import { RunningTest } from './RunningTest';
import { Agents } from './Agents';
import { BasePage } from './BasePage';

export class DocsPage extends BasePage{
  readonly leftSidebar: LeftSidebar;
  readonly rightSidebar: RightSidebar;

  constructor(readonly page: Page) {
    super(page);
    this.leftSidebar = new LeftSidebar(page);
    this.rightSidebar = new RightSidebar(page);
  }


  installation() {
    return new InstallationPage(this.page);
  }
 
  writingTest(){
    return new WritingTest(this.page);
  }

  runningTest(){
    return new RunningTest(this.page);
  }

  agents(){
    return new Agents(this.page);
  }

  async goTo() {
    await this.page.goto(docURL);
  }

  async goToInstallation() {
    await this.leftSidebar.goInstallation();
  }

   async goToWritingTest() {
    await this.leftSidebar.goWritingTest();
  }

  async goToRunningTest(){
    await this.leftSidebar.goRunningTest();
  }

  async gotoAgents(){
    await this.leftSidebar.goAgents();

}
}