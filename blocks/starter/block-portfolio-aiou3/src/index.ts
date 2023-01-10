import { Portfolio } from './Portfolio'
import { params } from './meta/Portfolio.params';
import { sampleData } from './meta/Portfolio.sample';
import { dimensions } from './meta/Portfolio.dimensions';
import { screenshots } from './meta/Portfolio.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.portfolio-aiou3',
    name: 'portfolio-aiou3',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-portfolio'],
    dataTags: [],
    widgetType: 'portfolio',
    isBlock: true,
    component: Portfolio,
};
