import styled from 'styled-components';
import { IconT } from './icon';
import pointer from 'assets/icons/pointer.svg';

interface Props {
  src: string;
  text?: string;
  size?: number;
  percentage?: number;
  handleClick?: any;
}

const Layout = styled.div<{ size?: number; percentage?: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  cursor: url(${pointer}), pointer;

  ${({ size }) => size && `width: ${size}px`}
  ${({ percentage }) => percentage && `width: calc(100vw * ${percentage})`}
`;

const Face = styled.img<{ src: string }>`
  box-sizing: border-box;
  width: 100%;
  background: url(${({ src }) => src}) no-repeat center;
  background-size: contain;
`;

function Icon({ src, text, size, percentage, handleClick }: Props & IconT) {
  return (
    <Layout size={size} percentage={percentage} onClick={handleClick}>
      <Face src={src} />
      <div>{text}</div>
    </Layout>
  );
}

export default Icon;

Icon.defaultProps = {
  text: '',
};
