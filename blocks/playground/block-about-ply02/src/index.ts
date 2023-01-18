import { Hero } from './About';
import { params } from './meta/About.params';
import { sampleData } from './meta/About.sample';
import { dimensions } from './meta/About.dimensions';
import { screenshots } from './meta/About.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.about-ply02',
    name: 'about-ply02',
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
