import React, { useContext } from 'react';
import { Container, Wrapper, H2, Overlay, SubTitle, ProductImage } from './Counter.style';

import { LocalGallery } from '@gdi/web-ui';

import { SiteContext } from '@gdi/engine';

export const id = 'com.usegdi.blocks.counter-ply08';

export type CounterProps = {
    strings: CounterStrings;
    colors: CounterColors;
    extra: CounterExtra;
};

export type CounterStrings = {
    slogan?: string;
    header: string;
};

export type CounterColors = {};

export type CounterExtra = {
    appsDatasetId: string;
    appsDataset: Json;
};

export function Apps(props: CounterProps) {
    const { strings, extra } = props;
    const { slogan, header } = strings;
    const { appsDataset } = extra;

   
    const { ga } = useContext(SiteContext);

    function onClick(item: Json) {
        ga('navigate', {
            category: 'gallery',
            label: item.id,
            source: 'apps',
        });
    }

    function onView(item: Json) {
        ga('view', {
            category: 'gallery',
            label: item.id,
            source: 'apps',
        });
    }

    function onTagChange(tagId: string) {
        ga('component', {
            category: 'gallery',
            label: 'tagChange',
            tagId,
            source: 'apps',
        });
    }

    function renderOverlay(item: Json) {
        const { imgUrl } = item;

        return (
            <Overlay className='text-dark' style={{ margin: '10px' }}>
                <ProductImage src={imgUrl} className="galleryImage" />
            </Overlay>
        );
    }

    return (
        <>
            <Wrapper
                className='Apps-wrapper bg-light '
                data-testid='Apps-wrapper'
            >
                <Container>
                    <H2 id='templates' className='text-dark text-center'>
                        {header}
                    </H2>
                    <SubTitle className='text-center'> {slogan} </SubTitle>
                    <div className='text-dark'>
                        <LocalGallery
                            items={appsDataset as Json[]}
                            contain
                            renderOverlay={renderOverlay}
                            onClick={onClick}
                            onView={onView}
                            onTagChange={onTagChange}
                        />
                    </div>
                </Container>
            </Wrapper>
        </>
    );
}
export default Apps;
