import React, { useContext } from 'react';
import { SiteContext } from '@gdi/engine';
import { render, fireEvent } from '@testing-library/react';
import { Services, ServicesProps } from './Services';
import { BaseComponentDriver } from 'testing-base';

export class ServicesDriver extends BaseComponentDriver {
    private props: Partial<ServicesProps> = {};

    constructor() {
        super('Services');
    }

    when: any = {
        rendered: () => {
            render(<Services {...(this.props as ServicesProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <Services {...(this.props as ServicesProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ServicesProps>) => {
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
