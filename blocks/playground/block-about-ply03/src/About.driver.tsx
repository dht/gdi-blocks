import React, { useContext } from 'react';
import { SiteContext } from '@gdi/engine';
import { render, fireEvent } from '@testing-library/react';
import { Hero, HeroProps } from './About';
import { BaseComponentDriver } from 'testing-base';

export class AboutDriver extends BaseComponentDriver {
    private props: Partial<HeroProps> = {};

    constructor() {
        super('Hero');
    }

    when: any = {
        rendered: () => {
            render(<Hero {...(this.props as HeroProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Hero {...(this.props as HeroProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<HeroProps>) => {
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
