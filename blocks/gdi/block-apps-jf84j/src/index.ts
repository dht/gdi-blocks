import { Apps } from './Apps'
import { params } from './meta/Apps.params';
import { sampleData } from './meta/Apps.sample';
import { dimensions } from './meta/Apps.dimensions';
import { screenshots } from './meta/Apps.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.apps-jf84j',
    name: 'apps-jf84j',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-apps'],
    dataTags: [],
    widgetType: 'apps',
    isBlock: true,
    component: Apps,
};
