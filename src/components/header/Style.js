/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    flex-direction: row;
    background: rgb(255, 255, 255);
    box-shadow: rgb(240 241 242) 0px 2px 4px;
    min-height: 80px;
    z-index: 20;
`;

export const BlockAddTasks = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-direction: row;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px 15px;
    background-color: tomato;
`;

export const BlockUserProfil = styled.div`
    background-color: yellow;
    flex: 1 1 auto;
    display: flex;
    flex-direction: row;
    -webkit-box-pack: end;
    justify-content: flex-end;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px 15px;
`;
