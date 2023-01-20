import { Testomonials } from './Testimonials'
import { params } from './meta/Testimonials.params';
import { sampleData } from './meta/Testimonials.sample';
import { dimensions } from './meta/Testimonials.dimensions';
import { screenshots } from './meta/Testimonials.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.testimonials-ply06',
    name: 'testimonials-ply06',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-about'],
    dataTags: [],
    widgetType: 'about',
    isBlock: true,
    component: Testomonials,
};
