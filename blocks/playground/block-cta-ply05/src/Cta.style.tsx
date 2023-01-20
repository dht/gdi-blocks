import styled from 'styled-components';
import { Grid, mobile, css, device } from '@gdi/engine';
import { CtaExtra } from './Cta';

export const Wrapper = styled.div`
    flex: 1;
    background-size: cover;
    background-position: center bottom;
    background-color: white;
    color: black;
    height: ${(props) => props.theme.vh(88)};
    display: flex;
    padding-top: 70px;
    border-top: 1px solid silver;
    font-family: ${(props) => props.theme.fontFamily};

    ${mobile(
        css`
            height: 100%;
        `
    )}

    ${device(
        'tablet',
            css`
                
                height: 170vh;
            `
        
        )}
`;

export const Container = styled(Grid.Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export const H1 = styled.h1`
    font-size: 50px;
    padding: 0;
    color: black;
    text-align: center;
    font-weight:normal;

    ${mobile(
        css`
            font-size: 30px;
        `
    )}
`;



export const SubTitle = styled.p`
    font-size: 22px;
    color: #666666;
`;



export const VideoImage = styled.div<{extra:CtaExtra}>`
background-image: url(${(props)=> props.extra.imageUrl});
height: 520px;
width: 700px;
background-size:contain;
background-repeat: no-repeat;
display: flex;
align-items: center;
justify-content: center;

.playbutton {
    font-size: 160px;
    
}
.iframe-class {
    height: 40rem;
    width: 100%;
}

.modal-class {
    background-color: transparent !important;
    width: 1220px;
    height: 100%;
    padding: 0px;
    border: none;
    position: absolute;
    left: -300px;
}

${device(
    'HD+',
        css`
        .iframe-class {
            height: 400px;

        }
        .modal-class {
            width: 1000px;
            height: 490px;
            left: -210px;
            top: 0px;

        }
            
        `
)}

${device(
    'HD',
        css`
            .iframe-class {
            height: 300px;

        }
        .modal-class {
            width: 620px;
            height: 300px;
            left: 0px;
            top: 100px;

        }
        `
)}

${device(
    '720p',
        css`
            .iframe-class {
            height: 300px;

        }
        .modal-class {
            width: 620px;
            height: 300px;
            left: -30px;
            top: 100px;

        }
        `
)}

${device(
    'tablet',
        css`
            .iframe-class {
            height: 300px;

        }
        .modal-class {
            width: 620px;
            height: 300px;
            left: -70px;
            top: 100px;

        }
        `
    
    )}

${mobile(
    css`
        .iframe-class {
            height: 200px;

        }
        .modal-class {
            width: 370px;
            height: 200px;
            left: -5px;
            top: 200px;

        }
    `
    
    )}




`
export const ProductInfo = styled.div`
height: 520px;
width: 700px;
padding: 10%;
display: block !important;
flex-direction: column !important;




${mobile(
    css`
        .products-card {
            position: relative;
    height: 200px;
    left: 100px;
    width: 390px;
    margin-top: 0px;
    top: -100px;
    margin-bottom: 70px;
}
    `
)}

`;



export const Row = styled.div``;
export const Column = styled.div``;

export const H5 = styled.h5``;
export const ModalButton = styled.button``;

export const PlayIcon = styled.span``;

export const ModalContent = styled.div``;
export const ModalHeader = styled.div``;
export const ModalDialog = styled.div``;

export const ModalBody = styled.div``;

export const ModalIframe = styled.iframe``;

export const ProductDescription = styled.p`
font-size: 19px;
font-weight: lighter;
    
`
export const Icon = styled.span`
    padding: 18px;
    font-weight: bold;
    font-size: 30px;
    color: #007ACE;
    border-radius: 50%;
    background-color: aliceblue;
`;




export const iconClass = "material-symbols-outlined"