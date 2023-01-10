import React from 'react';
import { Wrapper } from './PhotoBooth.style';

export type PhotoBoothProps = {};

export function PhotoBooth(_props: PhotoBoothProps) {
    return (
        <Wrapper className="PhotoBooth-wrapper" data-testid="PhotoBooth-wrapper">
            PhotoBooth
        </Wrapper>
    );
}

export default PhotoBooth;
