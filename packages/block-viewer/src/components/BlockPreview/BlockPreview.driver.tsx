import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BlockPreview, BlockPreviewProps } from './BlockPreview';
import { BaseComponentDriver } from 'testing-base';

export class BlockPreviewDriver extends BaseComponentDriver {
    private props: Partial<BlockPreviewProps> = {};

    constructor() {
        super('BlockPreview');
    }

    when: any = {
        rendered: () => {
            render(<BlockPreview {...(this.props as BlockPreviewProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<BlockPreview {...(this.props as BlockPreviewProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BlockPreviewProps>) => {
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
