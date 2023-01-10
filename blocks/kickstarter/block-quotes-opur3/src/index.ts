import { Quotes } from './Quotes'
import { params } from './meta/Quotes.params';
import { sampleData } from './meta/Quotes.sample';
import { dimensions } from './meta/Quotes.dimensions';
import { screenshots } from './meta/Quotes.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.quotes-opur3',
    name: 'quotes-opur3',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-about'],
    dataTags: [],
    widgetType: 'about',
    isBlock: true,
    component: Quotes,
};
