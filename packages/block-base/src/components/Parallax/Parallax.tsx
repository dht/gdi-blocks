import React from 'react';
import { Back, Content, Front, Wrapper } from './Parallax.style';
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
    const {
        placeholderImageUrl,
        backImageUrl,
        backImageUrlMobile,
        frontImageUrl,
        frontImageUrlMobile,
    } = props;

    const className = classnames('Parallax-wrapper', props.className);

    return (
        <Wrapper
            className={className}
            data-testid='Parallax-wrapper'
            imageUrl={placeholderImageUrl}
        >
            <Back
                imageUrl={backImageUrl}
                imageUrlMobile={backImageUrlMobile}
            ></Back>
            <Front
                imageUrl={frontImageUrl}
                imageUrlMobile={frontImageUrlMobile}
            ></Front>
            <Content className={className}>{props.children}</Content>
        </Wrapper>
    );
}

export default Parallax;
