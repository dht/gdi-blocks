import { Header } from './Header';
import { params } from './meta/Header.params';
import { sampleData } from './meta/Header.sample';
import { dimensions } from './meta/Header.dimensions';
import { screenshots } from './meta/Header.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.header-ply07',
    name: 'header-ply07',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-header'],
    dataTags: [],
    widgetType: 'header',
    isBlock: true,
    component: Header,
};
