import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ResolutionSelector, ResolutionSelectorProps } from './ResolutionSelector';
import { BaseComponentDriver } from 'testing-base';

export class ResolutionSelectorDriver extends BaseComponentDriver {
    private props: Partial<ResolutionSelectorProps> = {};

    constructor() {
        super('ResolutionSelector');
    }

    when: any = {
        rendered: () => {
            render(<ResolutionSelector {...(this.props as ResolutionSelectorProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ResolutionSelector {...(this.props as ResolutionSelectorProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ResolutionSelectorProps>) => {
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
