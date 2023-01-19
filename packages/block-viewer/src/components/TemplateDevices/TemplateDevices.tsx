import React from 'react';
import { Content, Header, IFrame, Wrapper } from './TemplateDevices.style';
import { resolutions } from './TemplateDevices.data';
import { useLocalStorage } from 'react-use';
import { useParams } from 'react-router-dom';
import { TemplateTabs } from '../Tabs/Tabs';
import ResolutionSelector from '../ResolutionSelector/ResolutionSelector';

export type TemplateDevicesProps = {};

export function TemplateDevices(_props: TemplateDevicesProps) {
    const { templateId } = useParams();
    const [resolutionId, setResolutionId] = useLocalStorage(
        'resolutionId',
        '1080p'
    );

    function renderIFrame() {
        const url = `http://localhost:3001/templates/${templateId}/view?fullscreen=true`;

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
            <TemplateTabs />
        </Wrapper>
    );
}

export default TemplateDevices;
