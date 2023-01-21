import { Blog } from './Blog'
import { params } from './meta/Blog.params';
import { sampleData } from './meta/Blog.sample';
import { dimensions } from './meta/Blog.dimensions';
import { screenshots } from './meta/Blog.screenshots';

export const block: IBlock = {
    id: 'com.usegdi.blocks.blog-ply09',
    name: 'blog-ply09',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-about'],
    dataTags: [],
    widgetType: 'about',
    isBlock: true,
    component: Blog,
};
