import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BlockTabs, BlockTabsProps } from './BlockTabs';
import { BaseComponentDriver } from 'testing-base';

export class BlockTabsDriver extends BaseComponentDriver {
    private props: Partial<BlockTabsProps> = {};

    constructor() {
        super('BlockTabs');
    }

    when: any = {
        rendered: () => {
            render(<BlockTabs {...(this.props as BlockTabsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<BlockTabs {...(this.props as BlockTabsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BlockTabsProps>) => {
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
