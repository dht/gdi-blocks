import { Topnav } from './Topnav'
import { params } from './meta/Topnav.params';
import { sampleData } from './meta/Topnav.sample';
import { dimensions } from './meta/Topnav.dimensions';
import { screenshots } from './meta/Topnav.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.topnav-pl012',
    name: 'topnav-pl012',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-about'],
    dataTags: [],
    widgetType: 'about',
    isBlock: true,
    component: Topnav,
};
