/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import img from './img/ProfilPhoto.png';
import iconArrow from './img/iconArrow.svg';

export const Navbar = styled.div`
    position: absolute;
    left: 0px;
    top: 0px;
    bottom: 0px;
    width: 220px;
    background: #0F1D40;
    z-index: 2;
`;

export const NavBarContainer = styled.div`
    padding: 16px 16px;
`;

export const NavBarLogo = styled.div`
    cursor: pointer;
`;

export const FormSearch = styled.form`
 position: relative;
  margin: 0 auto;
  background-color: #2D4071;
  margin-top: 30px;
  border-radius: 4px;

`;

export const InputSearch = styled.input.attrs((props) => ({
  type: 'search',
}))`
 outline: none;
  background: transparent;
  width: 100%;
  font-size: 14px;
  height: 40px;
  padding-left: 15px;
  border: none;
`;

export const ButtonSearch = styled.button.attrs((props) => ({
  type: 'submit',
}))`& {
 border: none;
  height: 42px;
  width: 42px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  background-color: transparent;

}
&:before {
  font-size: 16px;
  }  
`;

export const ProfilNavbar = styled.div`
    background-color: #2D4071;
    padding: 13px 10px 13px 16px;
    margin-bottom: 17px;
    `;

export const ProfilSpan = styled.div`
    display: flex;
    align-items: center;
`;

export const ProfilPhoto = styled.span`
    background: url(${img}) no-repeat; 
    width: 25px;
    height: 25px;
    overflow: hidden;
    display: inline-flex;
    flex-shrink: 0;
    margin-right: 10px;
`;

export const ListTask = styled.div`
    /* padding: 20px 16px; */
`;

export const ListTaskHeading = styled.div`
  & {
    display: flex;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
    padding: 15px 16px;
}
   
    &:hover {
    background-color: #1d2b4d;
  } 
  
`;

export const IconArrow = styled.span`
  & {
    background: url(${iconArrow}) no-repeat;
    display: block;
    width: 1rem;
    height: 1rem;
    background-position: center;
    margin-right: 10px;
  }
    

    &:active {
        transform: rotate(180deg);
        transition: transform .3s;
        transform-origin: center center;
    }
`;

export const TastBlock = styled.div`
    & {
    padding: 10px 16px;    
    font-size: 14px;
    color: #8C939F;
    cursor: pointer;

    }
    &:hover {
    background-color: #1d2b4d;
    color: white;
  } 
`;
