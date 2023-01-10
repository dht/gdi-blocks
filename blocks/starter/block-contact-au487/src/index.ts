import { Contact } from './Contact';
import { params } from './meta/Contact.params';
import { sampleData } from './meta/Contact.sample';
import { dimensions } from './meta/Contact.dimensions';
import { screenshots } from './meta/Contact.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.contact-au487',
    name: 'contact-au487',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-contact'],
    dataTags: [],
    widgetType: 'contact',
    isBlock: true,
    component: Contact,
};
