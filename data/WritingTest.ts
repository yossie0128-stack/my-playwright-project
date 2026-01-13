import { PackageTabs} from '../components/TabCodeBlock_data';

export const writingTestsTabCases:PackageTabs[]  = [
  {
    targetCmd: 'npm',
    assertCmd: 'npm init playwright@latest'
  },
  {
    targetCmd: 'yarn',
    assertCmd: 'yarn create playwright'
  },
  {
    targetCmd: 'pnpm',
    assertCmd: 'pnpm create playwright'
  }
];
