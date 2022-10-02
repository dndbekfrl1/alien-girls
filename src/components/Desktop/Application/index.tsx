import Icon from 'components/Common/Icon';
import Window from 'components/Common/Window';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { appState } from 'store';
import styled from 'styled-components';
import { AppT } from 'types/app';

interface Props extends AppT {
  size?: number;
  style?: any;
  zIndex?: number;
  children: React.ReactElement;
}

const Layout = styled.div`
  width: fit-content;
  margin: 0;
`;

const Container = styled.div`
  width: 100%;
  height: 200px;
  background: #fff;
`;

function Application({ id, name, src, size, style, zIndex, children }: Props) {
  const setAppState = useSetRecoilState(appState);
  const [open, set] = useState(false);

  const handleDoubleClick = ({ id, name, src }: AppT) => {
    set(true);
    setAppState(({ apps }) => ({
      id,
      name,
      src,
      apps: apps.find((app) => app.id === id)
        ? apps
        : [...apps, { id, name, src }],
    }));
  };

  const handleClose = ({ id }: AppT) => {
    set(false);
    setAppState(({ apps }) => ({
      id: -1,
      name: '',
      src: '',
      apps: apps.filter((app) => app.id !== id),
    }));
  };

  return (
    <Layout onDoubleClick={() => handleDoubleClick({ id, src, name })}>
      <>
        <Icon text={name} src={src} size={size} />
        {open && (
          <Window
            title={name}
            open={open}
            style={{ ...style, zIndex: zIndex }}
            onClose={() => handleClose({ id, src, name })}
          >
            <Container>{children}</Container>
          </Window>
        )}
      </>
    </Layout>
  );
}

export default Application;
