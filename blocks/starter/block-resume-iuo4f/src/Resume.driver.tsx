import React, { useContext } from 'react';
import { SiteContext } from '@gdi/engine';
import { render, fireEvent } from '@testing-library/react';
import { Resume, ResumeProps } from './Resume';
import { BaseComponentDriver } from 'testing-base';

export class ResumeDriver extends BaseComponentDriver {
    private props: Partial<ResumeProps> = {};

    constructor() {
        super('Resume');
    }

    when: any = {
        rendered: () => {
            render(<Resume {...(this.props as ResumeProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Resume {...(this.props as ResumeProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ResumeProps>) => {
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
