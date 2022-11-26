import styled, { keyframes } from 'styled-components';

const Title = styled.h1`
color: red;
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
export {
  Title, BlockOneTest, BlockTwo, TitleTwo, MainBlock, AnimeTitle,
};
