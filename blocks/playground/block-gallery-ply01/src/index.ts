import { Gallery } from './Gallery'
import { params } from './meta/Gallery.params';
import { sampleData } from './meta/Gallery.sample';
import { dimensions } from './meta/Gallery.dimensions';
import { screenshots } from './meta/Gallery.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.gallery-ply01',
    name: 'gallery-ply01',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-gallery'],
    dataTags: [],
    widgetType: 'Gallery',
    isBlock: true,
    component: Gallery,
};
