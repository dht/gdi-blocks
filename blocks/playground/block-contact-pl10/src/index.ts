import { Contact } from './Contact'
import { params } from './meta/Contact.params';
import { sampleData } from './meta/Contact.sample';
import { dimensions } from './meta/Contact.dimensions';
import { screenshots } from './meta/Contact.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.contact-pl10',
    name: 'contact-pl10',
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
