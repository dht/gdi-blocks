import React from 'react';
import { Wrapper } from './App.style';
import { Routes, Route } from 'react-router-dom';
import BlockMixerContainer from '../../containers/blocks/BlockMixerContainer';
import BlockViewerContainer from '../../containers/blocks/BlockViewerContainer';
import BlockDevicesContainer from '../../containers/blocks/BlockDevices';
import HomeContainer from '../../containers/HomeContainer';
import TemplateViewerContainer from '../../containers/templates/TemplateViewerContainer';
import TemplateDevicesContainer from '../../containers/templates/TemplateDevicesContainer';
import TemplateMixerContainer from '../../containers/templates/TemplateMixerContainer';
import ModalContentContainer from '../../containers/ModalContentContainer';

export type AppProps = {};

export function App(_props: AppProps) {
    return (
        <Wrapper className='App-wrapper' data-testid='App-wrapper'>
            <ModalContentContainer />
            <Routes>
                <Route path='/' element={<HomeContainer />} />

                <Route
                    path='/blocks/:blockId'
                    element={<BlockViewerContainer />}
                />
                <Route
                    path='/blocks/:blockId/view'
                    element={<BlockViewerContainer />}
                />
                <Route
                    path='/blocks/:blockId/mixer'
                    element={<BlockMixerContainer />}
                />
                <Route
                    path='/blocks/:blockId/devices'
                    element={<BlockDevicesContainer />}
                />

                <Route
                    path='/templates/:templateId/devices'
                    element={<TemplateDevicesContainer />}
                />
                <Route
                    path='/templates/:templateId/view'
                    element={<TemplateViewerContainer />}
                />
                <Route
                    path='/templates/:templateId/mixer'
                    element={<TemplateMixerContainer />}
                />
                <Route
                    path='/templates/:templateId'
                    element={<TemplateViewerContainer />}
                />
            </Routes>
        </Wrapper>
    );
}

export default App;
