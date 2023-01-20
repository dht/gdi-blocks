import React, { useEffect, useState } from 'react';
import { Back, Content, Front, Wrapper } from './Parallax.style';
import { loadImages } from 'shared-base';
import classnames from 'classnames';

export type ParallaxProps = {
    children: React.ReactNode;
    placeholderImageUrl: string;
    backImageUrl: string;
    backImageUrlMobile: string;
    frontImageUrl: string;
    frontImageUrlMobile: string;
    className?: string;
};

export function Parallax(props: ParallaxProps) {
    const { backImageUrl, frontImageUrl } = props;
    const [isRunning, setRunning] = useState(false);

    const className = classnames('Parallax-wrapper', props.className, {
        running: isRunning,
    });

    async function loadAllImages() {
        try {
            await loadImages([backImageUrl, frontImageUrl]);
            setRunning(true);
        } catch (_err) {}
    }

    useEffect(() => {
        loadAllImages();
    }, []);

    return (
        <Wrapper
            className={className}
            data-testid='Parallax-wrapper'
            props={props}
        >
            <Back className='back'></Back>
            <Front className='front'></Front>
            <Content className={className}>{props.children}</Content>
        </Wrapper>
    );
}

export default Parallax;
