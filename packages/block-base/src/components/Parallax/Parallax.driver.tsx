import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Parallax, ParallaxProps } from './Parallax';
import { BaseComponentDriver } from 'testing-base';

export class ParallaxDriver extends BaseComponentDriver {
    private props: Partial<ParallaxProps> = {};

    constructor() {
        super('Parallax');
    }

    when: any = {
        rendered: () => {
            render(<Parallax {...(this.props as ParallaxProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <Parallax {...(this.props as ParallaxProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ParallaxProps>) => {
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
