import React from 'react';
import { DevicesBlock } from '../../components/Devices/Devices';
import { useCurrentIdsBlock } from '../../hooks/useCurrentIds';

export const BlockDevicesContainer = () => {
    useCurrentIdsBlock();

    return <DevicesBlock />;
};

export default BlockDevicesContainer;
