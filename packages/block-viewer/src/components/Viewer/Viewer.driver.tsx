import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Viewer, ViewerProps } from './Viewer';
import { BaseComponentDriver } from 'testing-base';

export class ViewerDriver extends BaseComponentDriver {
    private props: Partial<ViewerProps> = {};

    constructor() {
        super('Viewer');
    }

    when: any = {
        rendered: () => {
            render(<Viewer {...(this.props as ViewerProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Viewer {...(this.props as ViewerProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ViewerProps>) => {
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
