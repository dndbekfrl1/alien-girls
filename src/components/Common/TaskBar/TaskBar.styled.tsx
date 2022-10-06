import styled, { css } from 'styled-components';
import calculatePercentage from 'utils/calculatePercentage';

const DecoLayout = styled.div`
  display: flex;
  padding: 0 4px;
`;

const Deco = styled.div<{ src: string }>`
  width: calc(100vw * ${calculatePercentage(105)});
  height: 100%;
  margin: 0 5px; //TODO
  background: url(${({ src }) => src}) center no-repeat;
  background-size: contain;
`;

const Divider = styled.div<{ reverse?: boolean }>`
  width: 4px;
  margin: 0 1.5px;
  background: silver;
  ${({ reverse }) =>
    reverse
      ? css`
          box-shadow: inset -1px -1px #ffffff, inset 1px 1px #929292,
            inset -2px -2px #dfdfdf, inset 2px 2px #808080;
        `
      : css`
          box-shadow: inset -1px -1px #929292, inset 1px 1px #fff,
            inset -2px -2px grey, inset 2px 2px #dfdfdf;
        `};
`;

export { DecoLayout, Deco, Divider };
