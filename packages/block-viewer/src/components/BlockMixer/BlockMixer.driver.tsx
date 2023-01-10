import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BlockMixer, BlockMixerProps } from './BlockMixer';
import { BaseComponentDriver } from 'testing-base';

export class BlockMixerDriver extends BaseComponentDriver {
    private props: Partial<BlockMixerProps> = {};

    constructor() {
        super('BlockMixer');
    }

    when: any = {
        rendered: () => {
            render(<BlockMixer {...(this.props as BlockMixerProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<BlockMixer {...(this.props as BlockMixerProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BlockMixerProps>) => {
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
