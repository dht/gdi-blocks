import { About } from './About'
import { params } from './meta/About.params';
import { sampleData } from './meta/About.sample';
import { dimensions } from './meta/About.dimensions';
import { screenshots } from './meta/About.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.hero-ply03',
    name: 'hero-ply03',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-hero'],
    dataTags: [],
    widgetType: 'About',
    isBlock: true,
    component: About,
};