import Icon from 'components/Common/Icon';
import Window from 'components/Common/Window';
import styled from 'styled-components';
import { AppT } from 'types/app';

interface Props extends AppT {
  open: boolean;
  size?: number;
  handleDoubleClick: (data: AppT) => void;
  handleClose: (data: AppT) => void;
}

const Layout = styled.div``;

const Container = styled.div`
  width: 100%;
  height: 200px;
  background: #fff;
`;

function Application({
  id,
  name,
  src,
  size,
  open,
  handleDoubleClick,
  handleClose,
}: Props) {
  return (
    <Layout onDoubleClick={() => handleDoubleClick({ id, src, name })}>
      <>
        <Icon text={name} src={src} size={size} />
        {open && (
          <Window
            title={name}
            open={open}
            onClose={() => handleClose({ id, src, name })}
          >
            <Container>흐음</Container>
          </Window>
        )}
      </>
    </Layout>
  );
}

export default Application;
