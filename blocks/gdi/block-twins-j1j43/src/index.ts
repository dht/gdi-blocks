import { Twins } from './Twins'
import { params } from './meta/Twins.params';
import { sampleData } from './meta/Twins.sample';
import { dimensions } from './meta/Twins.dimensions';
import { screenshots } from './meta/Twins.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.twins-j1j43',
    name: 'twins-j1j43',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-twins'],
    dataTags: [],
    widgetType: 'twins',
    isBlock: true,
    component: Twins,
};
