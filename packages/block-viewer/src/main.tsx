import React from 'react';
import { AppContainer } from './containers/AppContainer';
import { createRoot } from 'react-dom/client';
import './index.scss';
import '@fullcalendar/core';
import '@gdi/web-ui/dist/index.css';
import 'igrid/dist/index.css';

const container = document.getElementById('root');

if (container) {
    const root = createRoot(container);

    root.render(<AppContainer />);
}
