import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TemplateTabs, TemplateTabsProps } from './TemplateTabs';
import { BaseComponentDriver } from 'testing-base';

export class TemplateTabsDriver extends BaseComponentDriver {
    private props: Partial<TemplateTabsProps> = {};

    constructor() {
        super('TemplateTabs');
    }

    when: any = {
        rendered: () => {
            render(<TemplateTabs {...(this.props as TemplateTabsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<TemplateTabs {...(this.props as TemplateTabsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TemplateTabsProps>) => {
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
