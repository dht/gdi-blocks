import { Cta } from './Cta'
import { params } from './meta/Cta.params';
import { sampleData } from './meta/Cta.sample';
import { dimensions } from './meta/Cta.dimensions';
import { screenshots } from './meta/Cta.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.cta-ply05',
    name: 'cta-ply05',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-about'],
    dataTags: [],
    widgetType: 'about',
    isBlock: true,
    component: Cta,
};
