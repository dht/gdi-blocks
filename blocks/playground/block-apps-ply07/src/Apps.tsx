import React, { useContext } from 'react';
import { Container, Wrapper, H2, Overlay, SubTitle, ProductImage } from './Apps.style';

import { LocalGallery } from '@gdi/web-ui';

import classnames from 'classnames';
import { Column, Grid, SiteContext, useDataset } from '@gdi/engine';
import { hideText, padding } from 'polished';

export const id = 'com.usegdi.blocks.apps-ply07';

export type AppsProps = {
    strings: AppsStrings;
    colors: AppsColors;
    extra: AppsExtra;
};

export type AppsStrings = {
    slogan?: string;
    header: string;
};

export type AppsColors = {};

export type AppsExtra = {
    appsDatasetId: string;
    appsDataset: Json;
};

export function Apps(props: AppsProps) {
    const { strings, extra } = props;
    const { slogan, header } = strings;
    const { appsDatasetId, appsDataset } = extra;

    const apps = useDataset(appsDatasetId);
    console.log(appsDataset);

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
        const { tags, imgUrl } = item;

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
