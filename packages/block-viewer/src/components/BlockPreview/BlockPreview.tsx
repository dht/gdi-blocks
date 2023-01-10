import React, { useCallback, useMemo } from 'react';
import { Button, IFrame, Wrapper } from './BlockPreview.style';
import Draggable from 'react-draggable';
import { Panel } from '@gdi/web-ui';
import { useLocalStorage } from 'react-use';

export type BlockPreviewProps = {
    blockName: string;
};

export function BlockPreview(props: BlockPreviewProps) {
    const { blockName } = props;
    const [show, setShow] = useLocalStorage('BLOCK_PREVIEW', false);

    const togglePreview = useCallback(() => {
        setShow(!show);
    }, [show]);

    const url = useMemo(() => {
        return `http://localhost:3001/${blockName}?zoom=0.5&fullscreen=true`;
    }, [blockName]);

    function renderInner() {
        if (!blockName) {
            return null;
        }

        return <IFrame src={url} />;
    }

    function renderPanel() {
        if (!show) {
            return false;
        }

        return (
            <Panel id='block-preview' title='Preview' onClose={togglePreview}>
                <Wrapper
                    className='BlockPreview-wrapper'
                    data-testid='BlockPreview-wrapper'
                    style={{ zoom: 0.5 }}
                >
                    {renderInner()}
                </Wrapper>
            </Panel>
        );
    }

    return (
        <>
            <Button onClick={togglePreview}>
                <i className='material-icons'>live_tv</i>
            </Button>
            {renderPanel()}
        </>
    );
}

export default BlockPreview;
