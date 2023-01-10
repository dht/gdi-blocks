import { Top } from './Top';
import { params } from './meta/Top.params';
import { sampleData } from './meta/Top.sample';
import { dimensions } from './meta/Top.dimensions';
import { screenshots } from './meta/Top.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.top-aqwer',
    name: 'top-aqwer',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-top'],
    dataTags: [],
    widgetType: 'top',
    isBlock: true,
    component: Top,
};
