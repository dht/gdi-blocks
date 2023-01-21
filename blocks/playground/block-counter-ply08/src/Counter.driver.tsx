import React, { useContext } from 'react';
import { SiteContext } from '@gdi/engine';
import { render, fireEvent } from '@testing-library/react';
import { Apps, AppsProps } from './Counter';
import { BaseComponentDriver } from 'testing-base';

export class TestimonialsDriver extends BaseComponentDriver {
    private props: Partial<AppsProps> = {};

    constructor() {
        super('Cta');
    }

    when: any = {
        rendered: () => {
            render(<Apps {...(this.props as AppsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Apps {...(this.props as AppsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<AppsProps>) => {
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
