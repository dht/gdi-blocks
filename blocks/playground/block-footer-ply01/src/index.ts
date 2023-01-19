import { Footer } from './Footer';
import { params } from './meta/Footer.params';
import { sampleData } from './meta/Footer.sample';
import { dimensions } from './meta/Footer.dimensions';
import { screenshots } from './meta/Footer.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.footer-ply01',
    name: 'footer-ply01',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-about'],
    dataTags: [],
    widgetType: 'about',
    isBlock: true,
    component: Footer,
};
