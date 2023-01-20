import React, { useContext } from 'react';
import { SiteContext } from '@gdi/engine';
import { render, fireEvent } from '@testing-library/react';
import { Testomonials, TestomonialsProps } from './Testimonials';
import { BaseComponentDriver } from 'testing-base';

export class TestimonialsDriver extends BaseComponentDriver {
    private props: Partial<TestomonialsProps> = {};

    constructor() {
        super('Cta');
    }

    when: any = {
        rendered: () => {
            render(<Testomonials {...(this.props as TestomonialsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Testomonials {...(this.props as TestomonialsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TestomonialsProps>) => {
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
