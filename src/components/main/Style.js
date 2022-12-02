/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const MainContainer = styled.main`
    position: absolute;
    inset: 0px;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    height: 100%;
    width: calc(100% - 374px);
    transform: translateX(374px) translateZ(0px);
    overflow: scroll;
`;
