import React from 'react';
import {
    Button,
    Column,
    Container,
    H2,
    Image,
    Li,
    Row,
    Ul,
    Wrapper,
    Your,
} from './Twins.style';

export const id = 'com.usegdi.blocks.twins-aou31';

export type TwinsProps = {};

export function Twins(_props: TwinsProps) {
    return (
        <Wrapper className='Twins-wrapper' data-testid='Twins-wrapper'>
            <Container>
                <Row>
                    <Column>
                        <H2>
                            Complete your <span>urban kit</span>
                        </H2>

                        <Your>Your:</Your>

                        <Ul>
                            <Li>MacBook Pro 13" M2</Li>
                            <Li>Favorite coffee shop</Li>
                            <Li>Hifi headphones</Li>
                            <Li>UrbanKit™ One</Li>
                        </Ul>

                        <Button src='https://static-b9ebe.web.app/button-kickstarter-chalk-2.png' />
                    </Column>
                    <Column>
                        <Image src='https://static-b9ebe.web.app/coffeeshop-menu-board-2.png' />
                    </Column>
                </Row>
            </Container>
        </Wrapper>
    );
}

export default Twins;
