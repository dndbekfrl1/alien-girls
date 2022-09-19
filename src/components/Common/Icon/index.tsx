import styled from 'styled-components';
import { IconT } from './icon';

interface Props {
  src: string;
  text: string;
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  color: white;
`;

const Face = styled.div<{ src: string }>`
  width: 100%;
  height: 45px;
  background: url(${({ src }) => src}) no-repeat center;

  background-size: contain;
  font-size: 50px;
`;

function Icon({ src, text }: Props & IconT) {
  return (
    <Layout>
      <Face src={src} />
      <div className='text'>{text}</div>
    </Layout>
  );
}

export default Icon;
