import React, { useContext } from 'react';
import { 
    Container, 
    H1, 
    H5,
    Wrapper,
    Row,
    SubTitle,
    ImageContainer,
    VideoImage,
    ProductInfo, 
    Column,
    Icon,
    ProductDescription,
    iconClass,

} from './Cta.style';

export const id = 'com.usegdi.blocks.cta-ply05';

export type CtaProps = {
    strings: CtaStrings;
    colors: CtaColors;
    extra: CtaExtra;
};

export type CtaStrings = {
    slogan?: string;
    header: string;
};

export type CtaColors = {};

export type CtaExtra = {
    imageUrl: string;
    productDataset:Json;
   
};

export function Cta(props: CtaProps) {
    const { strings, colors, extra } = props;
    const { slogan, header } = strings;
    const { imageUrl , productDataset } = extra;

    return (
        <Wrapper >
            <Container>
                <Row className='row'>
                    <Column className="col-lg-12 text-center"><H1>{header}</H1><SubTitle> {slogan}</SubTitle></Column>
                </Row>
                <Row className='row'>
                    <Column className='col-lg-6 p-0 mt-4'><VideoImage extra={extra}></VideoImage></Column>
                    <Column className='col-lg-6 d-flex'>
                        <ProductInfo>
                            <Row className='row'>
                            {productDataset.map((value:Json,index:number)=>{
                        return(
                            <>
                                <Column className='col-lg-12 '><Icon className={iconClass} > {value.icon} </Icon>
                                   <H5 className='mt-2'> {value.label} </H5>
                                   <ProductDescription> {value.description} </ProductDescription>
                                </Column> 
                            </>
                        )
                    })}
                                       
                            </Row>
                        </ProductInfo>
                    </Column>
                </Row>
            </Container>
        </Wrapper>
    );
}

export default Cta;
