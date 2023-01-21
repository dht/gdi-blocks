import React, { useContext } from 'react';
import {
    
    Card,
    CardHeader,
    CardFooterText,
    Container,
    Header,
    Row,
    Column,
    SubHeader,
    Wrapper,
    CardBody,
    CardImage,
    CardTitle,
    CardDescription,
    
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
                <Container className='container' >
                    <Row className='row'>
                        <Column className='text-center col-lg-12'> 
                        <Header>Latest reads from blog</Header>
                         <SubHeader>See what we're up to on a rainy night</SubHeader> 
                         </Column>
                    </Row>
                    <Row className='row'>

                        {BlogDataSet.map((blogData:Json)=>{
                            return(
                                <>
                                <Column className='col-lg-4 mt-5'> 
                            <Card className='card p-0'>
                                <CardHeader className='card-header bg-light p-0 '>
                                    <CardImage src={blogData.imgUrl} alt="" />
                                </CardHeader>
                                <CardBody className='card-body'>
                                    <CardTitle> {blogData.title} </CardTitle>
                                    <CardDescription> {blogData.description} </CardDescription>
                                    <CardFooterText>
                                        {blogData.name} &nbsp; &nbsp; 
                                        {blogData.date}
                                    </CardFooterText>
                                </CardBody>
                            </Card>
                        
                         </Column>
                                </>
                            )
                        })}
                    </Row>
                </Container>
          </Wrapper>
        </>
    );
}
export default Contact;
