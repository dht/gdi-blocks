import React, {useState} from 'react';
import { Container, H2, Wrapper,  Skill, SkillAncher, GridContainer, GridItem, RenderDiv,RederImage , IconArrow} from './Services.style';


export const id = 'com.usegdi.block-services-ply01';

export type ServicesProps = {
    strings: ServicesStrings;
    colors: ServicesColors;
    extra: ServicesExtra;
};

export type ServicesStrings = {
    header: string;
    description?: string;
};

export type ServicesColors = {
};

export type ServicesExtra = {
    serviceDataset: Json;
};

export function Services(props: ServicesProps) {
    const { strings, colors, extra } = props;
    const { header, description } = strings;
    const { serviceDataset} = extra;
  


    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    };
    window.addEventListener('scroll', toggleVisible);
    
    return (
            <Wrapper
                className='Service-container'
                data-testid='Service-container'
                extra={colors}
            >
                <Container className='tabletView'>
                    <H2>{header}</H2>
                    <Skill>{description}</Skill>
                
              <GridContainer className='tabletView '>{renderItems(serviceDataset)}</GridContainer>
              </Container>
              <IconArrow onClick={scrollToTop}  isVisible={visible}>
             <i className='material-icons'>expand_less</i>
         </IconArrow>
            </Wrapper>
    );
}

function renderItems(gridData : Json) {
    return gridData.map((item: Json, index: number) =>  
        <GridItem key={item.id}>
            <RenderDiv className='hover-border'>
              <span>
              <RederImage src={item.imageUrl} alt={item.title} /></span>
           </RenderDiv>
           <SkillAncher>{item.title}</SkillAncher>
           <Skill>{item.description}</Skill>
        </GridItem>
    );
}



export default Services;
