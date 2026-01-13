import { PackageTabs} from '../components/TabCodeBlock_data';

export const testAgentsTabCases:PackageTabs[] = [
  {
    targetCmd: 'VS Code',
    assertCmd: 'npx playwright init-agents --loop=vscode'
  },
  {
    targetCmd: 'Claude Code',
    assertCmd: 'npx playwright init-agents --loop=claude'
  },
  {
    targetCmd: 'OpenCode',
    assertCmd: 'npx playwright init-agents --loop=opencode'
  }
];