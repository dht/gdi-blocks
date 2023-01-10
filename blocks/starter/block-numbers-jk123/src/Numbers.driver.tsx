import React, { useContext } from 'react';
import { SiteContext } from '@gdi/engine';
import { render, fireEvent } from '@testing-library/react';
import { Numbers, NumbersProps } from './Numbers';
import { BaseComponentDriver } from 'testing-base';

export class NumbersDriver extends BaseComponentDriver {
    private props: Partial<NumbersProps> = {};

    constructor() {
        super('Numbers');
    }

    when: any = {
        rendered: () => {
            render(<Numbers {...(this.props as NumbersProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Numbers {...(this.props as NumbersProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<NumbersProps>) => {
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
