import { Apps } from './Apps'
import { params } from './meta/Apps.params';
import { sampleData } from './meta/Apps.sample';
import { dimensions } from './meta/Apps.dimensions';
import { screenshots } from './meta/Apps.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.apps-ply07',
    name: 'apps-ply07',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-about'],
    dataTags: [],
    widgetType: 'about',
    isBlock: true,
    component: Apps,
};
