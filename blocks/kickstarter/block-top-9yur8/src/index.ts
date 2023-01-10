import { Top } from './Top'
import { params } from './meta/Top.params';
import { sampleData } from './meta/Top.sample';
import { dimensions } from './meta/Top.dimensions';
import { screenshots } from './meta/Top.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.top-9yur8',
    name: 'top-9yur8',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-about'],
    dataTags: [],
    widgetType: 'about',
    isBlock: true,
    component: Top,
};
