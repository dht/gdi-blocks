import React, { useContext } from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Contact, ContactProps } from './Contact';
import { BaseComponentDriver } from 'testing-base';

export class ContactDriver extends BaseComponentDriver {
    private props: Partial<ContactProps> = {};

    constructor() {
        super('Contact');
    }

    when: any = {
        rendered: () => {
            render(<Contact {...(this.props as ContactProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Contact {...(this.props as ContactProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ContactProps>) => {
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
