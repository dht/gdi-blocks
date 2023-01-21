import React, { useContext } from 'react';
import { SiteContext } from '@gdi/engine';
import { render, fireEvent } from '@testing-library/react';
import { Blog, BlogProps } from './Blog';
import { BaseComponentDriver } from 'testing-base';

export class TestimonialsDriver extends BaseComponentDriver {
    private props: Partial<BlogProps> = {};

    constructor() {
        super('Cta');
    }

    when: any = {
        rendered: () => {
            render(<Blog {...(this.props as BlogProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Blog {...(this.props as BlogProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BlogProps>) => {
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
