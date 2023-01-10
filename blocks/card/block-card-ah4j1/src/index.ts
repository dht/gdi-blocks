import { Card } from './Card'
import { params } from './meta/Card.params';
import { sampleData } from './meta/Card.sample';
import { dimensions } from './meta/Card.dimensions';
import { screenshots } from './meta/Card.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.card-ah4j1',
    name: 'card-ah4j1',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-card'],
    dataTags: [],
    widgetType: 'card',
    isBlock: true,
    component: Card,
};
