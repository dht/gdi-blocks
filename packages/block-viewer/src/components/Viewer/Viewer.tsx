import React from 'react';
import { Container, Content, Wrapper } from './Viewer.style';
import { EngineEdit, EngineView } from '@gdi/engine';
import { TemplateTabs } from '../Tabs/Tabs';
import { useSearchParams } from 'react-router-dom';
import classnames from 'classnames';

export type ViewerProps = {
    elements: Json[];
    datasets: Json;
    mobileMode?: boolean;
    children: React.ReactNode;
};

export function Viewer(props: ViewerProps) {
    const { elements, mobileMode, datasets } = props;
    const [search] = useSearchParams();

    const fullscreen = search.get('fullscreen');
    const zoom = search.get('zoom') ?? '1';

    const className = classnames({
        fullscreen,
    });

    return (
        <Wrapper
            className='Viewer-wrapper'
            data-testid='Viewer-wrapper'
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
            {!fullscreen ? props.children : null}
        </Wrapper>
    );
}

export default Viewer;
