/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import iconBTB from './img/Plus.svg';

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

//  <<------------ BlockUserProfil ------------>>

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

export const ContainerButtonAdd = styled.div`
   margin-right: 15px;
`;

export const BlockButtonAdd = styled.div`
    pointer-events: all;
`;

export const ByttonAdd = styled.button`
    margin: 0px;
    border: 0px;
    border-radius: 5px;
    outline: none;
    font-size: 14px;
    transition: background 0.3s ease-out 0s;
    padding: 0px 15px;
    height: 38px;
    min-width: 76px;
    cursor: pointer;
    color: rgb(255, 255, 255);
    background: rgb(0, 148, 255);
    font-family: Roboto, sans-serif !important;
    line-height: 42px;
    border-radius: 21px;
    padding: 0px 0px 0px 16px;
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    text-align: left;
    letter-spacing: 0px;
    width: 107px;
`;

export const ButtonIcon = styled.svg`
   &{
     background: url(${iconBTB}) no-repeat;
     width: 1em;
     height: 1em;
     color: rgb(255, 255, 255);
     background-position: center;
   }
   &svg:not(:root) {
    overflow: hidden;
}
`;

export const ButtonSpan = styled.span`
    margin-left: 7px;
    font-weight: 400;
    font-size: 14px;
    line-height: 23px;
    color: rgb(255, 255, 255);
`;

// << ------------- drop-down menu ------------- >>
export const ContainerAddTask = styled.div`
    z-index: 10;
    transform-origin: 54px 0px;
    left: 389px;
    top: 65px;
`;
export const BlockAddTask = styled.div`
    display: block;
`;
export const FlexAddTask = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 157px;
    min-width: 157px;
    overflow: auto;
    z-index: 11;
    margin-top: 5px;
    margin-bottom: 5px;
`;
export const AddTask = styled.div`
    color: rgb(34, 34, 34);
    cursor: pointer;
    line-height: 16px;
    padding: 10px 15px 10px 12px;
    font-size: 14px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px 8px;
    border-radius: 8px;
    background: transparent;
`;

export const AddEvent = styled.div`
    color: rgb(34, 34, 34);
    cursor: pointer;
    line-height: 16px;
    padding: 10px 15px 10px 12px;
    font-size: 14px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px 8px;
    border-radius: 8px;
    background: transparent;
`;

// << ------------- drop-down menu ------------- >>

//  <<------------ BlockUserProfil ------------>>
