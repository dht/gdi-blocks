import { Grid } from './Grid';
import { params } from './meta/Grid.params';
import { sampleData } from './meta/Grid.sample';
import { dimensions } from './meta/Grid.dimensions';
import { screenshots } from './meta/Grid.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.grid-st001',
    name: 'grid-st001',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-grid'],
    dataTags: [],
    widgetType: 'grid',
    isBlock: true,
    component: Grid,
};
