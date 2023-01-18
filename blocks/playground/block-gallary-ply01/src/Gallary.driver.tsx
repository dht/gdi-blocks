import React, { useContext } from 'react';
import { SiteContext } from '@gdi/engine';
import { render, fireEvent } from '@testing-library/react';
import { Gallary, GallaryProps } from './Gallary';
import { BaseComponentDriver } from 'testing-base';

export class GallaryDriver extends BaseComponentDriver {
    private props: Partial<GallaryProps> = {};

    constructor() {
        super('Hero');
    }

    when: any = {
        rendered: () => {
            render(<Gallary {...(this.props as GallaryProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Gallary {...(this.props as GallaryProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<GallaryProps>) => {
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
