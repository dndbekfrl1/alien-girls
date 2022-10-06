import styled from 'styled-components';
import { HEIGHT } from 'components/Common/TaskBar';
import Wallpaper from 'assets/images/wallpaper.png';
import calculatePercentage from 'utils/calculatePercentage';

const Layout = styled.div`
  position: relative;
  height: calc(100vh - (100vh * ${HEIGHT}));
  background: url(${Wallpaper}) no-repeat center;
  background-size: cover;
  overflow: hidden;
`;

const Left = styled.div`
  position: relative;
  width: fit-content;
  padding: calc(100vh * ${calculatePercentage(434, 'height')})
    calc(100vw * ${calculatePercentage(105)});
  height: 100%;

  > * {
    margin: calc(100vh * ${calculatePercentage(88, 'height')}) 0;
  }
`;

const Center = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  height: fit-content;
  top: calc(100vh * ${calculatePercentage(780, 'height')});

  > * {
    margin: 0 calc(100vw * ${calculatePercentage(40)});
  }
`;

export { Layout, Left, Center };
