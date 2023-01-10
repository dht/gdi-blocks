import styled from 'styled-components';

export const Wrapper = styled.div<{ zoom: string }>`
    flex: 1;
    background-color: black;
    zoom: ${(props) => props.zoom ?? 1};
`;

export const Content = styled.div`
    height: 100vh;
`;
