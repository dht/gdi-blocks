import { Resume } from './Resume';
import { params } from './meta/Resume.params';
import { sampleData } from './meta/Resume.sample';
import { dimensions } from './meta/Resume.dimensions';
import { screenshots } from './meta/Resume.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.resume-iuo4f',
    name: 'resume-iuo4f',
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
