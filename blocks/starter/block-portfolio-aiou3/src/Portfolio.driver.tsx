import React, { useContext } from 'react';
import { SiteContext } from '@gdi/engine';
import { render, fireEvent } from '@testing-library/react';
import { Portfolio, PortfolioProps } from './Portfolio';
import { BaseComponentDriver } from 'testing-base';

export class PortfolioDriver extends BaseComponentDriver {
    private props: Partial<PortfolioProps> = {};

    constructor() {
        super('Portfolio');
    }

    when: any = {
        rendered: () => {
            render(<Portfolio {...(this.props as PortfolioProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <Portfolio {...(this.props as PortfolioProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<PortfolioProps>) => {
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
