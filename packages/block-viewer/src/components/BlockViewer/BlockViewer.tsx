import { EngineView } from '@gdi/engine';
import React from 'react';
import { Json } from 'redux-connected/dist/dts/types';
import { Wrapper, Content } from './BlockViewer.style';
import BlockTabs from '../BlockTabs/BlockTabs';
import { useSearchParams } from 'react-router-dom';
import classnames from 'classnames';

export type BlockViewerProps = {
    elements: Json[];
    datasets: Json;
    mobileMode?: boolean;
};

export function BlockViewer(props: BlockViewerProps) {
    const { elements, mobileMode, datasets } = props;
    const [search] = useSearchParams();

    const fullscreen = search.get('fullscreen');
    const zoom = search.get('zoom') ?? '1';

    const className = classnames({
        fullscreen,
    });

    return (
        <Wrapper
            className='BlockViewer-wrapper'
            data-testid='BlockViewer-wrapper'
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
            {!fullscreen ? <BlockTabs /> : null}
        </Wrapper>
    );
}

export default BlockViewer;
