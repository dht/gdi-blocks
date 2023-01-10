import React, { useMemo } from 'react';
import { Back, Wrapper } from './BlockTabs.style';
import { TabsMini } from '@gdi/web-ui';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

export type BlockTabsProps = {};

export function BlockTabs(_props: BlockTabsProps) {
    const navigate = useNavigate();
    const params = useParams();
    const location = useLocation();

    const tabId = useMemo(() => {
        const lastPart = location.pathname.split('/').pop();
        const tab = tabs.find((t) => t.path === lastPart);
        return tab?.id || 'viewer';
    }, []);

    function onSelect(tabId: string) {
        const tab = tabs.find((t) => t.id === tabId);

        if (tab) {
            const { blockId } = params;
            navigate(`/${blockId}/${tab.path}`, { replace: true });
        }
    }

    function onHome() {
        navigate('/');
    }

    return (
        <Wrapper className='BlockTabs-wrapper' data-testid='BlockTabs-wrapper'>
            <Back onClick={onHome}>
                <i className='material-icons'>home</i>
            </Back>
            <TabsMini tabs={tabs} onSelect={onSelect} selectedTabId={tabId} />
        </Wrapper>
    );
}

const tabs = [
    {
        id: 'viewer',
        text: 'Viewer',
        path: 'view',
    },
    {
        id: 'mixer',
        text: 'Mixer',
        path: 'mixer',
    },
    {
        id: 'devices',
        text: 'Devices',
        path: 'devices',
    },
];

export default BlockTabs;
