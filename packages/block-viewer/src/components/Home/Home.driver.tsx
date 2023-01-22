import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Home, HomeProps } from './Home';
import { BaseComponentDriver } from 'testing-base';

export class HomeDriver extends BaseComponentDriver {
    private props: Partial<HomeProps> = {};

    constructor() {
        super('Home');
    }

    when: any = {
        rendered: () => {
            render(<Home {...(this.props as HomeProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Home {...(this.props as HomeProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<HomeProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        WrapperClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
