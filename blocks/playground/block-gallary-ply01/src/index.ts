import { Gallary } from './Gallary'
import { params } from './meta/Gallary.params';
import { sampleData } from './meta/Gallary.sample';
import { dimensions } from './meta/Gallary.dimensions';
import { screenshots } from './meta/Gallary.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.gallary-ply01',
    name: 'gallary-ply01',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-gallary'],
    dataTags: [],
    widgetType: 'Gallary',
    isBlock: true,
    component: Gallary,
};
