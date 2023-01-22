import { Contact } from './Contact'
import { params } from './meta/Contact.params';
import { sampleData } from './meta/Contact.sample';
import { dimensions } from './meta/Contact.dimensions';
import { screenshots } from './meta/Contact.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.footer-pl011',
    name: 'footer-pl011',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-about'],
    dataTags: [],
    widgetType: 'about',
    isBlock: true,
    component: Contact,
};
