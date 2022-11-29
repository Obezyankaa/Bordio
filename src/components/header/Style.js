/* eslint-disable no-tabs */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import iconBTB from './img/Plus.svg';
import iconKanban from './img/icon1.svg';
import iconNotice from './img/Notification.svg';
import userAvatr from './img/userAvatar.png';
import { ButtonSearch, FormSearch, InputSearch } from '../NavBar/Style';

export const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    flex-direction: row;
    background: rgb(255, 255, 255);
    box-shadow: rgb(240 241 242) 0px 2px 4px;
    min-height: 80px;
    z-index: 10;
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
`;

//  <<------------  <BlockAddTasks> ------------>>

export const BlockUserProfil = styled.div`
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
   & {
 margin: 0px;
 border: 0px;
 border-radius: 5px;
 outline: none;
 font-size: 14px;
 transition: background 0.3s ease-out 0s;
 padding: 0px 15px;
 height: 40px;
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
 width: 119px;
} 
    &:hover {
     background: rgb(0, 118, 204);
    }
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
    position: absolute;
    left: 15px;
    width: 132px;
    z-index: 10;
    transform-origin: 54px 0px;
    top: 65px;
    opacity: 1;
    visibility: visible;
    transform: scale(1);
    min-width: 132px;
    min-height: auto;
    background-color: white;
    overflow-y: hidden;
    overflow-x: hidden;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    box-shadow: rgb(67 90 111 / 30%) 0px 0px 1px, rgb(67 90 111 / 47%) 0px 8px 10px -4px;
`;
export const BlockAddTask = styled.div`
    display: block;
    visibility: visible;
`;
export const FlexAddTask = styled.div`  
    display: flex;
    flex-direction: column;
    /* max-width: 157px;
    min-width: 157px; */
    overflow: auto;
    z-index: 20;
    margin-top: 5px;
    margin-bottom: 5px;
`;

export const AddTask = styled.div`
    & {
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
    }
     &:hover {
    background: #F5F8FA;
    }
`;

export const AddIcon = styled.div`
    display: flex;
    align-item: center;
    margin-right: 10px;
`;

export const AddEvent = styled.div`
   & {
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
   }
   
    &:hover {
    background: #F5F8FA;
    }
`;

export const ContainerKanban = styled(ContainerButtonAdd)`
`;
export const BlockButtonKanban = styled(BlockButtonAdd)`
`;
export const ButtonKanban = styled(ByttonAdd)`
   & { 
    background: #F5F8FA;
   }
   &:hover {
    background: rgb(238, 242, 245);
    }
`;
export const ButtonIconKanban = styled(ButtonIcon)`
    & {
    background: url(${iconKanban}) no-repeat;
    background-position: center;
    margin-left: 10px;
    }

    &:hover {
        transform: rotate(180deg);
        transition: transform .3s;
        transform-origin: center center;
    }
`;
export const ButtonSpanKanban = styled(ButtonSpan)`
    color: rgb(34, 34, 34);
`;
// в рамках тестового продублирую,👇 а в целом там будет другая логика, на кнопках !

export const ContainerMenuKanban = styled(ContainerAddTask)`
    left: 137px;
`;
export const BlockMenu = styled(BlockAddTask)`
`;
export const FlexMenu = styled(FlexAddTask)`
`;
export const OneTask = styled(AddTask)`
`;

export const ContainerFilter = styled(ContainerKanban)``;
export const BlockButtonFilter = styled(BlockButtonKanban)``;
export const ButtonFilter = styled(ButtonKanban)`
    width: 97px;`;
export const ButtonSpanFilter = styled(ButtonSpanKanban)``;
export const ButtonIconFilter = styled(ButtonIconKanban)``;
// в рамках тестового продублирую,👇 а в целом там будет другая логика, на кнопках !

export const ContainerFilterMenu = styled(ContainerAddTask)`
    left: 265px;
`;
export const FilterMenu = styled(BlockAddTask)`
`;
export const FlexFilterMenu = styled(FlexAddTask)`
`;
export const OneFilterTask = styled(AddTask)`
`;
// << ------------- drop-down menu ------------- >>

//  <<------------  <BlockAddTasks> ------------>>

//  <<------------ BlockUserProfil ------------>>
export const FormSearchProfil = styled(FormSearch)`
    width: 180px;
    border-radius: 2rem;
    background-color: #F5F8FA;
    color: #8C939F;
    margin: 0;
`;
export const FormInput = styled(InputSearch)`
    color: #222222;
`;
export const FormButton = styled(ButtonSearch)``;

export const UserProfilIcon = styled.svg`
    background: url(${iconNotice}) no-repeat;
    width: 2.5rem;
    height: 2.5rem;
    margin: 0px 8px 0px 20px;
`;
export const UserAvatar = styled.div`
    background: url(${userAvatr}) no-repeat;
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
`;
//  <<------------ BlockUserProfil ------------>>
