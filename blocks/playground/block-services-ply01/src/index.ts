import { Services } from './Services'
import { params } from './meta/Services.params';
import { sampleData } from './meta/Services.sample';
import { dimensions } from './meta/Services.dimensions';
import { screenshots } from './meta/Services.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.block-services-ply01',
    name: 'services-ply01',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-services'],
    dataTags: [],
    widgetType: 'services',
    isBlock: true,
    component: Services,
};