import { Apps } from './Counter'
import { params } from './meta/Counter.params';
import { sampleData } from './meta/Counter.sample';
import { dimensions } from './meta/Counter.dimensions';
import { screenshots } from './meta/Counter.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.counter-ply08',
    name: 'counter-ply08',
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
