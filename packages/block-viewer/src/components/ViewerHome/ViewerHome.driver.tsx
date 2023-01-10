import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ViewerHome, ViewerHomeProps } from './ViewerHome';
import { BaseComponentDriver } from 'testing-base';

export class ViewerHomeDriver extends BaseComponentDriver {
    private props: Partial<ViewerHomeProps> = {};

    constructor() {
        super('ViewerHome');
    }

    when: any = {
        rendered: () => {
            render(<ViewerHome {...(this.props as ViewerHomeProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ViewerHome {...(this.props as ViewerHomeProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ViewerHomeProps>) => {
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
