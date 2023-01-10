import { Numbers } from './Numbers';
import { params } from './meta/Numbers.params';
import { sampleData } from './meta/Numbers.sample';
import { dimensions } from './meta/Numbers.dimensions';
import { screenshots } from './meta/Numbers.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.numbers-jk123',
    name: 'numbers-jk123',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-numbers'],
    dataTags: [],
    widgetType: 'numbers',
    isBlock: true,
    component: Numbers,
};
