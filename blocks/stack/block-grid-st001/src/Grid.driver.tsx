import React, { useContext } from 'react';
import { SiteContext } from '@gdi/engine';
import { render, fireEvent } from '@testing-library/react';
import { Grid, GridProps } from './Grid';
import { BaseComponentDriver } from 'testing-base';

export class GridDriver extends BaseComponentDriver {
    private props: Partial<GridProps> = {};

    constructor() {
        super('Grid');
    }

    when: any = {
        rendered: () => {
            render(<Grid {...(this.props as GridProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Grid {...(this.props as GridProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<GridProps>) => {
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
