import { BlockTabs } from '../Tabs/Tabs';
import React from 'react';
import { Content, Header, IFrame, Wrapper } from './Resolutions.style';
import { resolutions } from './Resolutions.data';
import { useLocalStorage } from 'react-use';
import { useParams } from 'react-router-dom';
import ResolutionSelector from '../ResolutionSelector/ResolutionSelector';

export type ResolutionsProps = {};

export function Resolutions(_props: ResolutionsProps) {
    const { blockId } = useParams();
    const [resolutionId, setResolutionId] = useLocalStorage(
        'resolutionId',
        '1080p'
    );

    function renderIFrame() {
        const url = `http://localhost:3001/${blockId}/view?fullscreen=true`;

        const resolution = Object.values(resolutions).find(
            (resolution) => resolution.id === resolutionId
        );

        if (!resolution) {
            return null;
        }

        const style = {
            width: resolution.screenWidth,
            height: resolution.screenHeight,
        };

        return <IFrame style={style} src={url} />;
    }

    return (
        <Wrapper
            className='Resolutions-wrapper'
            data-testid='Resolutions-wrapper'
        >
            <Content>
                <Header>
                    <ResolutionSelector
                        value={resolutionId}
                        onChange={(resolutionId) =>
                            setResolutionId(resolutionId)
                        }
                    />
                </Header>
                {renderIFrame()}
            </Content>
            <BlockTabs />
        </Wrapper>
    );
}

export default Resolutions;