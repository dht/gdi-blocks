import { Hero } from './Hero'
import { params } from './meta/Hero.params';
import { sampleData } from './meta/Hero.sample';
import { dimensions } from './meta/Hero.dimensions';
import { screenshots } from './meta/Hero.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.hero-ply04',
    name: 'play-ply04',
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
