import React from 'react';
import { Content, Wrapper } from './Resolutions.style';
import BlockTabs from '../BlockTabs/BlockTabs';
import { Resolutions as Res } from '@gdi/block-base';
import { useParams } from 'react-router-dom';
export type ResolutionsProps = {};

export function Resolutions(_props: ResolutionsProps) {
    const { blockId } = useParams();

    const url = `http://localhost:3001/${blockId}/view?fullscreen=true`;

    return (
        <Wrapper
            className='Resolutions-wrapper'
            data-testid='Resolutions-wrapper'
        >
            <Content>
                <Res url={url} />
            </Content>
            <BlockTabs />
        </Wrapper>
    );
}

export default Resolutions;
