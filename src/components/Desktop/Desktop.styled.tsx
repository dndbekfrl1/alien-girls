import styled from 'styled-components';
import Wallpaper from 'assets/images/wallpaper.png';

const Layout = styled.div`
  display: flex;
  height: calc(2880px - 190px);
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
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin-top: 780px;
  margin-right: 1880px;
  > * {
    margin: 0 20px;
  }
`;

const QuizLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Layout, Left, Center, QuizLayout };
