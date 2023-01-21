import App from '../components/App/App';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { init } from '../store';
import { Theme } from '@gdi/web-ui';
import { ThemeProvider } from 'styled-components';
import { useStyledTheme } from '@gdi/hooks';
import { initBlocks } from '../data/blocks.init';
import { EngineContextProvider } from '@gdi/engine';

export type AppContainerProps = {};

initBlocks();

export const AppContainer = (props: AppContainerProps) => {
    const theme = useStyledTheme('en', false);

    const Cmp: any = ThemeProvider;

    const store = init();

    return (
        <Cmp theme={theme}>
            <Theme>
                <EngineContextProvider>
                    <Router>
                        <Provider store={store}>
                            <App />
                        </Provider>
                    </Router>
                </EngineContextProvider>
            </Theme>
        </Cmp>
    );
};
