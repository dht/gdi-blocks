import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TemplateViewer, TemplateViewerProps } from './TemplateViewer';
import { BaseComponentDriver } from 'testing-base';

export class TemplateViewerDriver extends BaseComponentDriver {
    private props: Partial<TemplateViewerProps> = {};

    constructor() {
        super('TemplateViewer');
    }

    when: any = {
        rendered: () => {
            render(<TemplateViewer {...(this.props as TemplateViewerProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<TemplateViewer {...(this.props as TemplateViewerProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TemplateViewerProps>) => {
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
