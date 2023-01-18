import React, { useContext } from 'react';
import { 
    H1, 
    Wrapper, 
    FlexContainer , 
    Col,
    P,
    ClientIcon,
    HeroImg

} from './Hero.style';
import { useDataset } from '@gdi/engine';

export const id = 'com.usegdi.blocks.hero-ply02';

export type HeroProps = {
    strings: HeroStrings;
    colors: HeroColors;
    extra: HeroExtra;
};

export type HeroStrings = {
    slogan?: string;
    header: string;
    description?: string;
    buttonText?:string;
};

export type HeroColors = {};

export type HeroExtra = {
    imageUrl: string;
    socialDatasetId: string;
    heroDatasetId:string;

};

export function Hero(props: HeroProps) {
    const { strings, extra } = props;
    const { header, description ,buttonText } = strings;
    const { heroDatasetId } = extra;




    const heroData = useDataset(heroDatasetId);


   

    return (
 
        <>
        <Wrapper>
        <FlexContainer>
            <Col> 
                <H1 className='pt-10'> {header} </H1>
                 <P>{description}</P>
                 <button className='hero-button'>{buttonText} </button>
                 <br />
                 <br /><br />
                   {heroData.map((clientimage:any)=>{
                    return(
                        <>
                            <ClientIcon>
                            <img src={clientimage.imgUrl}/>
                            </ClientIcon>
                        </>
                    )
                   })}
             </Col>
            <Col>
                <HeroImg
                extra={extra}
                ></HeroImg>
            </Col>
        </FlexContainer>
        </Wrapper>
        
        </>
    );
}

export default Hero;
