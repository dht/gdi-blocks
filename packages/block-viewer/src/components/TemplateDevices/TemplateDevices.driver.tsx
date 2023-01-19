import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TemplateDevices, TemplateDevicesProps } from './TemplateDevices';
import { BaseComponentDriver } from 'testing-base';

export class TemplateDevicesDriver extends BaseComponentDriver {
    private props: Partial<TemplateDevicesProps> = {};

    constructor() {
        super('TemplateDevices');
    }

    when: any = {
        rendered: () => {
            render(<TemplateDevices {...(this.props as TemplateDevicesProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<TemplateDevices {...(this.props as TemplateDevicesProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TemplateDevicesProps>) => {
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
