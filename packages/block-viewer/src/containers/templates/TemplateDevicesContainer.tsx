import React from 'react';
import { DevicesTemplates } from '../../components/Devices/Devices';
import { useCurrentIdsTemplate } from '../../hooks/useCurrentIds';

export const TemplateDevicesContainer = () => {
    useCurrentIdsTemplate();

    return <DevicesTemplates />;
};

export default TemplateDevicesContainer;
