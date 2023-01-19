import { Resume } from './Resume';
import { params } from './meta/Resume.params';
import { sampleData } from './meta/Resume.sample';
import { dimensions } from './meta/Resume.dimensions';
import { screenshots } from './meta/Resume.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.contact-ply05',
    name: 'contact-ply05',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-resume'],
    dataTags: [],
    widgetType: 'resume',
    isBlock: true,
    component: Resume,
};
