import styled from 'styled-components';
import { BoxShadowInner, BoxShadowOuter } from 'styles/BoxShadow.styled';

const DecoLayout = styled.div`
  display: flex;
  padding: 0 4px;
  width: 444px;
`;

const Deco = styled.div<{ src: string }>`
  width: 105px;
  height: 100%;
  margin: 0 10px;
  background: url(${({ src }) => src}) center no-repeat;
  background-size: contain;
`;

const Divider = styled.div<{ reverse?: boolean }>`
  width: 12px;
  margin: 0 10px;
  background: silver;
  ${({ reverse }) => (reverse ? BoxShadowInner : BoxShadowOuter)}
`;

export { DecoLayout, Deco, Divider };
