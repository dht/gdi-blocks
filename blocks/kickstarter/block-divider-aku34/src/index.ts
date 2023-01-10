import { Divider } from './Divider';
import { params } from './meta/Divider.params';
import { sampleData } from './meta/Divider.sample';
import { dimensions } from './meta/Divider.dimensions';
import { screenshots } from './meta/Divider.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.divider-aku34',
    name: 'divider-aku34',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-divider'],
    dataTags: [],
    widgetType: 'divider',
    isBlock: true,
    component: Divider,
};
