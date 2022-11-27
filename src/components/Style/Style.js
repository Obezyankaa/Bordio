/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from 'styled-components';

export const Navbar = styled.div`
    position: absolute;
    left: 0px;
    top: 0px;
    bottom: 0px;
    width: 220px;
    background: rgb(15, 29, 64);
    z-index: 2;
`;

export const NavBarContainer = styled.div`
    padding: 26px 18px 18px 26px;
`;

export const NavBarLogo = styled.div`
    
`;

export const FormSearch = styled.form`
 position: relative;
  margin: 0 auto;
  background-color: rgb(46,59,114);
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
  height: 42px;
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

const Title = styled.div`
color: white;
font-weight: 400;
font-size: 14px;
line-height: 20px;
`;

const TitleTwo = styled(Title)`
    background-color: aqua;
`;

const pulse = keyframes`
    from {
        opacity: 0.1;
    }
    to {
        opacity: 1;
    }
`;

const AnimeTitle = styled(TitleTwo)`
    animation: 3s ${pulse} infinite alternate;
`;

const MainBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const BlockOneTest = styled.div`
    display: flex;
    justify-content: center;
    width: 300px;
    height: 300px;
    background-color: white;
    border-radius: 1rem;
    align-items: center;
`;

const BlockTwo = styled.div`
    display: block;
    width: 200px;
    height: 200px;
    background-color: black;
    border-radius: 1rem;
`;

// eslint-disable-next-line import/prefer-default-export
// export {
//   Title, BlockOneTest, BlockTwo, TitleTwo, MainBlock, AnimeTitle,
// };
