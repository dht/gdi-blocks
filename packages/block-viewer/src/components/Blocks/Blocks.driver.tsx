import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Blocks, BlocksProps } from './Blocks';
import { BaseComponentDriver } from 'testing-base';

export class BlocksDriver extends BaseComponentDriver {
    private props: Partial<BlocksProps> = {};

    constructor() {
        super('Blocks');
    }

    when: any = {
        rendered: () => {
            render(<Blocks {...(this.props as BlocksProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Blocks {...(this.props as BlocksProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BlocksProps>) => {
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
