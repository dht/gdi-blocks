import React from 'react';
import { Wrapper } from './App.style';
import { Routes, Route } from 'react-router-dom';
import { BlocksContainer } from '../../containers/BlocksContainer';
import BlockMixerContainer from '../../containers/BlockMixerContainer';
import BlockViewerContainer from '../../containers/BlockViewerContainer';
import ResolutionsContainer from '../../containers/ResolutionsContainer';
import PhotoBoothContainer from '../../containers/PhotoBoothContainer';
import ViewerHomeContainer from '../../containers/ViewerHomeContainer';
import TemplateViewerContainer from '../../containers/TemplateViewerContainer';

export type AppProps = {};

export function App(_props: AppProps) {
    return (
        <Wrapper className='App-wrapper' data-testid='App-wrapper'>
            <Routes>
                <Route path='/' element={<ViewerHomeContainer />} />
                <Route path='/gallery' element={<BlocksContainer />} />
                <Route
                    path='/templates/:templateId'
                    element={<TemplateViewerContainer />}
                />
                <Route path='/:blockId' element={<BlockViewerContainer />} />
                <Route
                    path='/:blockId/view'
                    element={<BlockViewerContainer />}
                />
                <Route
                    path='/:blockId/mixer'
                    element={<BlockMixerContainer />}
                />
                <Route
                    path='/:blockId/devices'
                    element={<ResolutionsContainer />}
                />
                <Route
                    path='/:blockId/photobooth'
                    element={<PhotoBoothContainer />}
                />
            </Routes>
        </Wrapper>
    );
}

export default App;
