import React, { useMemo } from 'react';
import { Back, Wrapper } from './Tabs.style';
import { TabsMini } from '@gdi/web-ui';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

export type TabsProps = {
    tabs: ITab[];
};

export function Tabs(props: TabsProps) {
    const { tabs } = props;

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
        <Wrapper className='Tabs-wrapper' data-testid='Tabs-wrapper'>
            <Back onClick={onHome}>
                <i className='material-icons'>home</i>
            </Back>
            <TabsMini tabs={tabs} onSelect={onSelect} selectedTabId={tabId} />
        </Wrapper>
    );
}

type ITab = {
    id: string;
    text: string;
    path: string;
};

export function BlockTabs() {
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

    return <Tabs tabs={tabs} />;
}

export function TemplateTabs() {
    const tabs = [
        {
            id: 'viewer',
            text: 'Viewer',
            path: 'view',
        },
    ];

    return <Tabs tabs={tabs} />;
}

export default Tabs;
