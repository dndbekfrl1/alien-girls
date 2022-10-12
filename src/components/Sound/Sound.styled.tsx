import styled from 'styled-components';
import { BoxShadowInner, BoxShadowOuter } from 'styles/BoxShadow.styled';

const Layout = styled.div`
  width: 920px;
  padding: 0 32px;

  .music-control {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px 0;

    .sec {
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
