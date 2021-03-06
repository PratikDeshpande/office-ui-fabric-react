import * as React from 'react';
import { ScrollablePaneDefaultExample } from './examples/ScrollablePane.Default.Example';

import { IDocPageProps } from '../../common/DocPage.types';
import { ScrollablePaneDetailsListExample } from './examples/ScrollablePane.DetailsList.Example';
import { ScrollablePaneStatus } from './ScrollablePane.checklist';

const ScrollablePaneDefaultExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ScrollablePane/examples/ScrollablePane.Default.Example.tsx') as string;
const ScrollablePaneDetailsListExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ScrollablePane/examples/ScrollablePane.DetailsList.Example.tsx') as string;

const ScrollablePaneDefaultExampleCodepen = require('!raw-loader!office-ui-fabric-react/lib/codepen/components/ScrollablePane/ScrollablePane.Default.Example.Codepen.txt') as string;
const ScrollablePaneDetailsListExampleCodepen = require('!raw-loader!office-ui-fabric-react/lib/codepen/components/ScrollablePane/ScrollablePane.DetailsList.Example.Codepen.txt') as string;

export const ScrollablePanePageProps: IDocPageProps = {
  title: 'ScrollablePane',
  componentName: 'ScrollablePane',
  componentUrl:
    'https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/office-ui-fabric-react/src/components/ScrollablePane',
  componentStatus: ScrollablePaneStatus,
  examples: [
    {
      title: 'Default',
      code: ScrollablePaneDefaultExampleCode,
      codepenJS: ScrollablePaneDefaultExampleCodepen,
      view: <ScrollablePaneDefaultExample />,
      isScrollable: false
    },
    {
      title: 'DetailsList Locked Header',
      code: ScrollablePaneDetailsListExampleCode,
      codepenJS: ScrollablePaneDetailsListExampleCodepen,
      view: <ScrollablePaneDetailsListExample />,
      isScrollable: false
    }
  ],
  propertiesTablesSources: [
    require<string>('!raw-loader!office-ui-fabric-react/src/components/ScrollablePane/ScrollablePane.types.ts'),
    require<string>('!raw-loader!office-ui-fabric-react/src/components/Sticky/Sticky.types.ts')
  ],
  overview: require<string>('!raw-loader!office-ui-fabric-react/src/components/ScrollablePane/docs/ScrollablePaneOverview.md'),
  bestPractices: '',
  dos: require<string>('!raw-loader!office-ui-fabric-react/src/components/ScrollablePane/docs/ScrollablePaneDos.md'),
  donts: require<string>('!raw-loader!office-ui-fabric-react/src/components/ScrollablePane/docs/ScrollablePaneDonts.md'),
  isHeaderVisible: true,
  isFeedbackVisible: true,
  allowNativeProps: true,
  nativePropsElement: ['a', 'button']
};
