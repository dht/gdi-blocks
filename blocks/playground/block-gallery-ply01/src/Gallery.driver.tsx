import React, { useContext } from 'react';
import { SiteContext } from '@gdi/engine';
import { render, fireEvent } from '@testing-library/react';
import { Gallery, GalleryProps } from './Gallery';
import { BaseComponentDriver } from 'testing-base';

export class GalleryDriver extends BaseComponentDriver {
    private props: Partial<GalleryProps> = {};

    constructor() {
        super('Gallery');
    }

    when: any = {
        rendered: () => {
            render(<Gallery {...(this.props as GalleryProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Gallery {...(this.props as GalleryProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<GalleryProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
