import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Devices, DevicesProps } from './Devices';
import { BaseComponentDriver } from 'testing-base';

export class DevicesDriver extends BaseComponentDriver {
    private props: Partial<DevicesProps> = {};

    constructor() {
        super('Devices');
    }

    when: any = {
        rendered: () => {
            render(<Devices {...(this.props as DevicesProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Devices {...(this.props as DevicesProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<DevicesProps>) => {
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
