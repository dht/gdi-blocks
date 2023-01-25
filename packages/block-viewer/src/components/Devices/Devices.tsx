import React from 'react';
import { Content, Header, IFrame, Wrapper } from './Devices.style';
import { resolutions } from './Devices.data';
import { useLocalStorage } from 'react-use';
import { useParams } from 'react-router-dom';
import { BlockTabs, TemplateTabs } from '../Tabs/Tabs';
import DeviceSelector from './Devices.selector';

export type DevicesProps = {
    url: string;
    children: React.ReactNode;
};

export function Devices(props: DevicesProps) {
    const { url } = props;
    const [resolutionId, setResolutionId] = useLocalStorage(
        'resolutionId',
        '1080p'
    );

    function renderIFrame() {
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
        <Wrapper className='Devices-wrapper' data-testid='Devices-wrapper'>
            <Content>
                <Header>
                    <DeviceSelector
                        value={resolutionId}
                        onChange={(resolutionId) =>
                            setResolutionId(resolutionId)
                        }
                    />
                </Header>
                {renderIFrame()}
            </Content>
            {props.children}
        </Wrapper>
    );
}

export function DevicesTemplates() {
    const { templateId } = useParams();

    const url = `http://localhost:3001/templates/${templateId}/view?fullscreen=true`;

    return (
        <Devices url={url}>
            <TemplateTabs />
        </Devices>
    );
}

export function DevicesBlock() {
    const { blockId } = useParams();

    const url = `http://localhost:3001/blocks/${blockId}/view?fullscreen=true`;

    return (
        <Devices url={url}>
            <BlockTabs />
        </Devices>
    );
}

export default Devices;
