import { Cta } from './Cta';
import { params } from './meta/Cta.params';
import { sampleData } from './meta/Cta.sample';
import { dimensions } from './meta/Cta.dimensions';
import { screenshots } from './meta/Cta.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.cta-uiey3',
    name: 'cta-uiey3',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-cta'],
    dataTags: [],
    widgetType: 'cta',
    isBlock: true,
    component: Cta,
};
