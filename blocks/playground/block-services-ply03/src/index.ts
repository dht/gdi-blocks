import { Services } from './Services'
import { params } from './meta/Services.params';
import { sampleData } from './meta/Services.sample';
import { dimensions } from './meta/Services.dimensions';
import { screenshots } from './meta/Services.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.services-ply03',
    name: 'services-ply03',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-Services'],
    dataTags: [],
    widgetType: 'Services',
    isBlock: true,
    component: Services,
};
