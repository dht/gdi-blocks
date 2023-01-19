import React, { useContext } from 'react';
import { render, fireEvent } from '@testing-library/react';
import { About, AboutProps } from './About';
import { BaseComponentDriver } from 'testing-base';

export class AboutDriver extends BaseComponentDriver {
    private props: Partial<AboutProps> = {};

    constructor() {
        super('About');
    }

    when: any = {
        rendered: () => {
            render(<About {...(this.props as AboutProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<About {...(this.props as AboutProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<AboutProps>) => {
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
