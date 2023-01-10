import { About } from './About';
import { dimensions } from './meta/About.dimensions';
import { params } from './meta/About.params';
import { sampleData } from './meta/About.sample';
import { screenshots } from './meta/About.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.about-iuhr3',
    name: 'about-iuhr3',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-about'],
    dataTags: [],
    widgetType: 'about',
    isBlock: true,
    component: About,
};
