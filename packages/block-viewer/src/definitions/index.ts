import bucket from './json/d.bucket.blocks.json';
import calendar from './json/d.calendar.blocks.json';
import filters from './json/d.filter.blocks.json';
import formNewDefault from './json/d.form.blocks.default.json';
import formEdit from './json/d.form.blocks.edit.json';
import formNew from './json/d.form.blocks.new.json';
import gallery from './json/d.gallery.blocks.json';
import overlay from './json/d.overlay.blocks.json';
import sheet from './json/d.sheet.blocks.json';
import table from './json/d.table.blocks.json';
import timeline from './json/d.timeline.blocks.json';
import multiBar from './json/d.multiBar.blocks.json';
import { itemStructure } from './d.itemStructure.blocks';

export const definitions: ICrudDefinitions = {
    nodeName: 'libraryBlocks', // @ts-expect-error
    filters, // @ts-expect-error
    formEdit, // @ts-expect-error
    formNew,
    table,
    calendar, // @ts-expect-error
    gallery, // @ts-expect-error
    overlay, // @ts-expect-error
    sheet,
    timeline,
    formNewDefault, // @ts-expect-error
    bucket, // @ts-expect-error
    multiBar,
    itemStructure,
};
