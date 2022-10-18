import styled from 'styled-components';
import { BoxShadowInner, BoxShadowOuter } from 'styles/BoxShadow.styled';
import playIcon from 'assets/icons/sound/play.svg';
import stopIcon from 'assets/icons/sound/stop.svg';
import pauseIcon from 'assets/icons/sound/pause.svg';
import nextIcon from 'assets/icons/sound/next.svg';
import prevIcon from 'assets/icons/sound/prev.svg';

const Layout = styled.div`
  width: 920px;
  padding: 0 32px;

  .music-control {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px 0;

    .time {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 562px;
      height: 174px;
      margin-right: 20px;
      background: black;
      color: #808000;
      font-size: 4rem;
      font-weight: bold;
      ${BoxShadowInner}
    }
  }

  .music-info {
    select {
      width: 838px;
      height: 78px;
      padding: 0 20px;
      background-size: contain;
      font-size: 48px;
    }
  }

  button {
    width: 83px;
    height: 78px;
    ${BoxShadowOuter}
    font-size: 48px;
    cursor: pointer;

    &.play {
      width: 249px;
      background: url(${playIcon}) no-repeat center;
    }

    &.stop {
      background: url(${stopIcon}) no-repeat center;
    }

    &.prev {
      width: 166px;
      background: url(${prevIcon}) no-repeat center;
    }
    &.next {
      width: 166px;
      background: url(${nextIcon}) no-repeat center;
    }
  }
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;

  p {
    display: flex;
    justify-content: flex-end;
    font-size: 42px;
    min-width: 140px;
    padding: 0 20px;
  }
`;

export { Layout, FlexBox };
