import { EngineView } from '@gdi/engine';
import React from 'react';
import { Json } from 'redux-connected/dist/dts/types';
import { Wrapper, Content } from './TemplateViewer.style';
import { TemplateTabs } from '../Tabs/Tabs';
import { useSearchParams } from 'react-router-dom';
import classnames from 'classnames';

export type TemplateViewerProps = {
    elements: Json[];
    datasets: Json;
    mobileMode?: boolean;
};

export function TemplateViewer(props: TemplateViewerProps) {
    const { elements, mobileMode, datasets } = props;
    const [search] = useSearchParams();

    const fullscreen = search.get('fullscreen');
    const zoom = search.get('zoom') ?? '1';

    const className = classnames({
        fullscreen,
    });

    return (
        <Wrapper
            className='TemplateViewer-wrapper'
            data-testid='TemplateViewer-wrapper'
            zoom={zoom}
        >
            <Content className={className}>
                <EngineView
                    elements={elements}
                    isMobile={mobileMode}
                    datasets={datasets}
                    backgroundColor='transparent'
                />
            </Content>
            {!fullscreen ? <TemplateTabs /> : null}
        </Wrapper>
    );
}

export default TemplateViewer;
