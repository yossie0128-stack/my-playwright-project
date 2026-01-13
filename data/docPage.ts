import { PackageTabs} from '../components/TabCodeBlock_data';


export const createSamplePackageTab:PackageTabs [] = [
      { targetCmd: 'yarn', assertCmd: 'yarn create playwright' },
      { targetCmd: 'npm',  assertCmd: 'npm init playwright@latest' },
      { targetCmd: 'pnpm', assertCmd: 'pnpm create playwright' }

    ];

export const runSamplePackageTab:PackageTabs [] = [
      {targetCmd: 'yarn', assertCmd: 'yarn playwright test'},
      {targetCmd: 'pnpm', assertCmd: 'pnpm exec playwright test'},
      {targetCmd: 'npm',  assertCmd: 'npx playwright test'} 
];

export const reportSamplePackageTab:PackageTabs [] = [
      {targetCmd: 'yarn', assertCmd: 'yarn playwright show-report' },
      {targetCmd: 'pnpm', assertCmd: 'pnpm exec playwright show-report'},
      {targetCmd: 'npm',  assertCmd: 'npx playwright show-report'}
];

export const testSamplePackageTab:PackageTabs [] = [
      {targetCmd: 'yarn', assertCmd: 'yarn playwright test --ui'},
      {targetCmd: 'pnpm', assertCmd: 'pnpm exec playwright test --ui'},
      {targetCmd: 'npm',  assertCmd: 'npx playwright test --ui'}
];

export const updateSamplePackageTab: PackageTabs[] = [
  {targetCmd: 'yarn',
   assertCmd: `yarn add --dev @playwright/test@latestyarn playwright install --with-deps`
  },
  {targetCmd: 'pnpm', assertCmd:`pnpm install --save-dev @playwright/test@latestpnpm exec playwright install --with-deps` },
  {targetCmd: 'npm', assertCmd:`npm install -D @playwright/test@latestnpx playwright install --with-deps`}
];

export const versionSamplePackageTab: PackageTabs[] = [
   {targetCmd: 'yarn', assertCmd:'yarn playwright --version' },
   {targetCmd: 'pnpm', assertCmd: 'pnpm exec playwright --version'},
   {targetCmd: 'npm',  assertCmd: 'npx playwright --version'}
];