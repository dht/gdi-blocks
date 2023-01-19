import { Quotes } from './Quotes'
import { params } from './meta/Quotes.params';
import { sampleData } from './meta/Quotes.sample';
import { dimensions } from './meta/Quotes.dimensions';
import { screenshots } from './meta/Quotes.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.quotes-ply01',
    name: 'quotes-ply01',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-quotes'],
    dataTags: [],
    widgetType: 'quotes',
    isBlock: true,
    component: Quotes,
};
