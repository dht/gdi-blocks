import React from 'react';
import TemplateDevices from '../components/TemplateDevices/TemplateDevices';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';

export const TemplateDevicesContainer = () => {
    return <TemplateDevices />;
};

export default TemplateDevicesContainer;
