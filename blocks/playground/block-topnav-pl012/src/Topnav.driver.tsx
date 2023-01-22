import React, { useContext } from 'react';
import { SiteContext } from '@gdi/engine';
import { render, fireEvent } from '@testing-library/react';
import { Topnav, TopnavProps } from './Topnav';
import { BaseComponentDriver } from 'testing-base';

export class TestimonialsDriver extends BaseComponentDriver {
    private props: Partial<TopnavProps> = {};

    constructor() {
        super('Topnav');
    }

    when: any = {
        rendered: () => {
            render(<Topnav {...(this.props as TopnavProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Topnav {...(this.props as TopnavProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TopnavProps>) => {
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
