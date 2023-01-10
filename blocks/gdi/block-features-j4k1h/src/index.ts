import { Features } from './Features'
import { params } from './meta/Features.params';
import { sampleData } from './meta/Features.sample';
import { dimensions } from './meta/Features.dimensions';
import { screenshots } from './meta/Features.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.features-j4k1h',
    name: 'features-j4k1h',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-features'],
    dataTags: [],
    widgetType: 'features',
    isBlock: true,
    component: Features,
};
