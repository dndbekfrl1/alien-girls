import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { appState } from 'store';
import styled from 'styled-components';
import { AppT } from 'types/app';
import Icon from 'components/Common/Icon';
import Window from 'components/Common/Window';

interface Props extends AppT {
  style?: any;
  zIndex?: number;
  defaultX?: number;
  defaultY?: number;
  children: React.ReactElement;
}

const Layout = styled.div`
  width: fit-content;
  margin: 0;
`;

const Container = styled.div`
  width: 100%;
  min-height: 200px;
  height: 100%;
  background: #fff;
`;

function Application({
  id,
  name,
  src,
  style,
  defaultX,
  defaultY,
  zIndex,
  children,
}: Props) {
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
        <Icon text={name} src={src} size={130} />
        {open && (
          <Window
            title={name}
            open={open}
            style={{ ...style, zIndex: zIndex }}
            defaultX={defaultX}
            defaultY={defaultY}
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
