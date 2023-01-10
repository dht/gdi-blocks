import { Section } from './Section';
import { params } from './meta/Section.params';
import { sampleData } from './meta/Section.sample';
import { dimensions } from './meta/Section.dimensions';
import { screenshots } from './meta/Section.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.section-gkj41',
    name: 'section-gkj41',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-section'],
    dataTags: [],
    widgetType: 'section',
    isBlock: true,
    component: Section,
};
