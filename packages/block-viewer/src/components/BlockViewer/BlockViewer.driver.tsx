import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BlockViewer, BlockViewerProps } from './BlockViewer';
import { BaseComponentDriver } from 'testing-base';

export class BlockViewerDriver extends BaseComponentDriver {
    private props: Partial<BlockViewerProps> = {};

    constructor() {
        super('BlockViewer');
    }

    when: any = {
        rendered: () => {
            render(<BlockViewer {...(this.props as BlockViewerProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<BlockViewer {...(this.props as BlockViewerProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BlockViewerProps>) => {
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
