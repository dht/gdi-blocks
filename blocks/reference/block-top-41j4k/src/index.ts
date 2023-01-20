import { Top } from './Top';
import { params } from './meta/Top.params';
import { sampleData } from './meta/Top.sample';
import { dimensions } from './meta/Top.dimensions';
import { screenshots } from './meta/Top.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.top-41j4k',
    name: 'top-41j4k',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-Top'],
    dataTags: [],
    widgetType: 'Top',
    isBlock: true,
    component: Top,
};
