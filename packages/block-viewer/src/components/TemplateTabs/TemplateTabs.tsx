import React from 'react';
import { Wrapper } from './TemplateTabs.style';

export type TemplateTabsProps = {};

export function TemplateTabs(_props: TemplateTabsProps) {
    return (
        <Wrapper className="TemplateTabs-wrapper" data-testid="TemplateTabs-wrapper">
            TemplateTabs
        </Wrapper>
    );
}

export default TemplateTabs;
