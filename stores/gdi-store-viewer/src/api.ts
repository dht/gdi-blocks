import { EndpointsConfigOverrides, ConnectionType } from 'redux-connected';

export const endpointsConfigOverrides = (
    connectionType: ConnectionType
): EndpointsConfigOverrides => ({
    appStateViewer: {
        id: 'appStateViewer',
        connectionType: ConnectionType.NONE,
    },
    currentIds: {
        id: 'currentIds',
        connectionType,
        optimistic: true,
    },
});
