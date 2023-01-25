import React from 'react';
import styled from 'styled-components';
import { IResolution, resolutions } from './Devices.data';

export type DeviceSelectorProps = {
    value?: string;
    onChange: (resolutionId: string) => void;
};

export function DeviceSelector(props: DeviceSelectorProps) {
    const { value } = props;

    function onChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const { value } = event.target;
        props.onChange(value);
    }

    function renderOption(option: IResolution) {
        const { id } = option;
        return (
            <option key={option.id} className='option'>
                {id}
            </option>
        );
    }

    function renderOptions() {
        return Object.values(resolutions).map((option: IResolution) =>
            renderOption(option)
        );
    }

    return (
        <Select value={value} onChange={onChange}>
            {renderOptions()}
        </Select>
    );
}

export const Select = styled.select`
    font-size: 20px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #000;
    color: #fff;
`;

export default DeviceSelector;
