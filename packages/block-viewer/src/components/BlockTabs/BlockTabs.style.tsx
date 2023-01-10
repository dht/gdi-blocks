import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
`;

export const Back = styled.div`
    position: absolute;
    left: 5px;
    top: 2px;
    color: #aaa;
    cursor: pointer;

    &:hover {
        color: gold;
    }
`;
