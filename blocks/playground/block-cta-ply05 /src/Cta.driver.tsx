import React, { useContext } from 'react';
import { SiteContext } from '@gdi/engine';
import { render, fireEvent } from '@testing-library/react';
import { Cta, CtaProps } from './Cta';
import { BaseComponentDriver } from 'testing-base';

export class CtaDriver extends BaseComponentDriver {
    private props: Partial<CtaProps> = {};

    constructor() {
        super('Cta');
    }

    when: any = {
        rendered: () => {
            render(<Cta {...(this.props as CtaProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Cta {...(this.props as CtaProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<CtaProps>) => {
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
