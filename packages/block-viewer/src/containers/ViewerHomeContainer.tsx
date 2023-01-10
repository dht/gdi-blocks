import React, { useContext } from 'react';
import ViewerHome from '../components/ViewerHome/ViewerHome';
import { EngineContext } from '@gdi/engine';

export const ViewerHomeContainer = () => {
    const { blocks } = useContext(EngineContext);

    return <ViewerHome blocks={blocks} />;
};

export default ViewerHomeContainer;
