import React, { useContext } from 'react';
import { Container, H1, Wrapper} from './Gallary.style';
import { SiteContext, useDataset } from '@gdi/engine';

export const id = 'com.usegdi.blocks.gallary-ply01';

export type GallaryProps = {
    strings: GallaryStrings;
    colors: GallaryColors;
    extra: GallaryExtra;
};

export type GallaryStrings = {
    header: string;
};

export type GallaryColors = {};

export type GallaryExtra = {
    imageUrl: string;
    socialDatasetId: string;
};

export function Gallary(props: GallaryProps) {
    const { strings, colors, extra } = props;
    const {header } = strings;
    const { socialDatasetId } = extra;
 
    const { ga } = useContext(SiteContext);

    const social = useDataset(socialDatasetId);

    return (
            <Wrapper
                className='Hero-container'
                data-testid='Hero-container'
                extra={extra}
            >
                <Container>
                    <H1>{header}</H1>
                </Container>
            </Wrapper>
    );
}

export default Gallary;
