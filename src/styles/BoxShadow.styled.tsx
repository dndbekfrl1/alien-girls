import { css } from 'styled-components';

const BoxShadowOuter = css`
  box-shadow: inset -6px -6px #808080, inset 6px 6px #fff, inset -7px -7px grey,
    inset 7px 7px #dfdfdf;
`;

const BoxShadowInner = css`
  box-shadow: inset -6px -6px #ffffff, inset 6px 6px #808080,
    inset -7px -7px #dfdfdf, inset 7px 7px #808080;
`;

export { BoxShadowOuter, BoxShadowInner };
