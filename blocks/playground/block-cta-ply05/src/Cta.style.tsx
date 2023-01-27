import styled from 'styled-components';
import { Grid, mobile, css, device } from '@gdi/engine';
import { CtaExtra } from './Cta';

export const Wrapper = styled.div`
    flex: 1;
    background-size: cover;
    background-position: center bottom;
    background-color: white;
    color: black;
    display: flex;
    padding: 100px 0;
    border-top: 1px solid #e5e5e5;
    font-family: 'Circular', sans-serif;

    ${mobile(
        css`
            padding: 70px 0;
            padding-bottom: 100px !important;
        `
    )}

    ${device(
        'tablet',
        css`
            padding: 70px 0;
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

export const H1 = styled.h3`
    font-size: 42px;
    padding: 0;
    color: black;
    text-align: center;
    font-weight: 400;
    font-family: 'Circular', sans-serif;
    line-height: 48px;

    ${device(
        'tablet',
        css`
            font-size: 35px;
        `
    )}

    ${mobile(
        css`
            font-size: 25px;
        `
    )}
`;

export const SubTitle = styled.p`
    font-size: 18px;
    padding-left: 10px;
    padding-right: 10px;
    color: #666666;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 32px;

    ${mobile(
        css`
            font-size: 16px;
        `
    )}
`;

export const VideoImage = styled.div<{ extra: CtaExtra }>`
    background-image: url(${(props) => props.extra.imageUrl});
    height: 520px;
    width: 700px;
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;

    .playbutton {
        font-size: 150px;
        margin-top: -70px;
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
            margin-left: 60px;

            width: 600px;
            .iframe-class {
                height: 300px;
            }
            .modal-class {
                width: 620px;
                height: 300px;
                left: -70px;
                top: 100px;
            }

            .playbutton {
                position: relative;
                top: -40px;
                font-size: 110px;
            }
        `
    )};

    ${mobile(
        css`
            background-size: contain;
            width: 90%;
            height: 340px !important;
            left: 134px;
            right: 150px;
            position: relative;

            .iframe-class {
                height: 200px;
            }
            .modal-class {
                width: 350px;
                height: 200px;
                left: 130px;
                top: 0px;
            }
            .playbutton {
                font-size: 65px;
                margin-left: -136px;
                top: 25px;
            }
        `
    )}
`;

export const VideoImageContainer = styled.div`
    width: 700px;
    overflow: hidden;

    ${device(
        '720p',
        css`
            width: 650px;
            transform: translateX(30px);
        `
    )}

    ${mobile(
        css`
            width: 500px;
        `
    )}
`;
export const ProductInfo = styled.div`
    height: 520px;
    width: 700px;
    padding: 10%;
    display: block !important;
    flex-direction: column !important;

    ${device(
        'tablet',
        css`
            margin-top: -140px;
        `
    )}

    ${mobile(
        css`
            margin-top: -95px;
        `
    )}
`;

export const H5 = styled.h5`
    margin-top: 13px;
`;

export const ProductDescription = styled.p`
    font-size: 18px;
    font-weight: lighter;
    color: #666666;

    padding-right: 30px;

    ${mobile(
        css`
            font-size: 17px;
        `
    )}
`;
export const Icon = styled.span`
    padding: 18px;
    font-weight: bold;
    margin-top: -20px !important;
    font-size: 30px;
    color: #007ace;
    margin-top: 0px;
    border-radius: 50%;
    background-color: aliceblue;

    &.icon2 {
        padding: 18px;
        font-weight: bold;
        font-size: 30px;
        color: #50b83c;
        border-radius: 50%;
        background-color: #edf8eb;
        
        margin-top: 25px !important;
    }

    ${mobile(
        css`
            font-size: 25px;
            padding: 15px;
            &.icon2 {
                padding: 15px;
                font-weight: bold;
                font-size: 25px;
                color: #50b83c;
                border-radius: 50%;
                background-color: #edf8eb;
                margin-top: -40px !important;
            }
        `
    )}
`;

export const HeaderRow = styled.div`
    text-align: center;
`;

export const HeaderColumn = styled.div.attrs(() => ({
    className: '',
}));

export const ModalRow = styled.div.attrs(() => ({
    className: ' modal fade',
    id: 'exampleModal',
}))``;

export const PlayIcon = styled.span.attrs(() => ({
    className: 'material-symbols-outlined playbutton ',
}))``;

export const VideoColumn = styled.div.attrs(() => ({
    className: 'col-lg-6 mt-4',
}))``;

export const ContentRow = styled.div.attrs(() => ({
    className: 'row pl-3',
}))``;

export const ModalButton = styled.button.attrs(() => ({
    className: 'btn',
}))``;

export const ModalButtonClosed = styled.button.attrs(() => ({
    className: 'btn-close btn-danger btn ',
}))``;

export const ModalDialog = styled.div.attrs(() => ({
    className: 'modal-dialog',
}))``;

export const ModalContent = styled.div.attrs(() => ({
    className: 'modal-content modal-class',
}))``;

export const ModalHeader = styled.div.attrs(() => ({
    className: 'modal-header',
}))``;

export const ModalBody = styled.div.attrs(() => ({
    className: 'modal-body',
}))``;
export const ModalIframe = styled.iframe.attrs(() => ({
    className: 'iframe-class',
}))``;

export const ProductColumn = styled.div.attrs(() => ({
    className: 'col-lg-6',
}))``;

export const ProductCard = styled.div`
    ${mobile(
        css`
            margin-top: -95px;
            position: relative;
            height: 200px;
            left: 100px;
            width: 390px;
            padding-left: 40px;
            padding-right: 40px;
            margin-top: -10px;
            top: 60px;
            margin-bottom: 50px;
        `
    )}
`;
