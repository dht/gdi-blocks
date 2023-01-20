import { Hero } from './Hero';
import { params } from './meta/Hero.params';
import { sampleData } from './meta/Hero.sample';
import { dimensions } from './meta/Hero.dimensions';
import { screenshots } from './meta/Hero.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.grid-st001',
    name: 'grid-st001',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-hero'],
    dataTags: [],
    widgetType: 'hero',
    isBlock: true,
    component: Hero,
};
