import React, { useContext } from 'react';
import {
    
    
    ContainerFluid,
    Header,
    Row,
    Column,
    SubHeader,
    Wrapper,
    ContactBack,
   
    
} from './Contact.style';

export const id = 'com.usegdi.blocks.contact-pl10';

export type ContactProps = {
    strings: ContactStrings;
    colors: ContactColors;
    extra: ContactExtra;
};

export type ContactStrings = {
    slogan?: string;
    header: string;
};

export type ContactColors = {};

export type ContactExtra = {
    BlogDataSet: Json;
};

export function Contact(props: ContactProps) {
    const { extra } = props;
    const { BlogDataSet } = extra;

    return (
        <>
            <Wrapper>
                <ContainerFluid className=' p-0 container-fluid' >
                        <Row className='row'>
                            <Column className='col-lg-12'>
                                <ContactBack>

                                    <div className="row">
                                        <div className="col-lg-6 ">
                                            <img src="https://webify-13e95.kxcdn.com/demo/webify/creative/wp-content/uploads/sites/8/2019/04/newsletter-img.png" alt="" />
                                        </div>
                                        <div className="col-lg-6">
                                            djdj
                                        </div>
                                    </div>
                                </ContactBack>
                            </Column>
                        </Row>
                </ContainerFluid>
          </Wrapper>
        </>
    );
}
export default Contact;
