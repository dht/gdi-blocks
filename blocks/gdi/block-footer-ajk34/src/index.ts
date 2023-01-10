import { Footer } from './Footer'
import { params } from './meta/Footer.params';
import { sampleData } from './meta/Footer.sample';
import { dimensions } from './meta/Footer.dimensions';
import { screenshots } from './meta/Footer.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.footer-ajk34',
    name: 'footer-ajk34',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-footer'],
    dataTags: [],
    widgetType: 'footer',
    isBlock: true,
    component: Footer,
};
