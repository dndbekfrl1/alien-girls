import styled from 'styled-components';
import Wallpaper from 'assets/images/wallpaper.png';

const Layout = styled.div`
  display: flex;
  height: calc(100vh - 190px);
  background: url(${Wallpaper}) no-repeat center;
  background-size: cover;
  overflow: hidden;
`;

const Left = styled.div`
  width: fit-content;
  padding: 434px 104px 0;

  > div {
    margin-bottom: 175px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Center = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin-top: 780px;
  margin-right: 1880px;
  box-sizing: border-box;

  > * {
    margin: 0 20px;
  }
`;

const QuizLayout = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 1938px;
`;

export { Layout, Left, Center, QuizLayout };
