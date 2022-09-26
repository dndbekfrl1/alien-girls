import styled from 'styled-components';
import { Height } from 'components/Common/TaskBar';
import Wallpaper from 'assets/images/wallpaper.png';
import Folder from 'components/Desktop/Folder';
import folder from 'assets/icons/folder.png';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { appState } from 'store';
import { AppT } from 'types/app';

const Layout = styled.div`
  position: relative;
  height: calc(100vh - ${Height}px);
  padding: 20px 20px 0;
  background: url(${Wallpaper}) no-repeat center;
  background-size: cover;
`;

function Desktop() {
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
    <Layout>
      <Folder
        id={1}
        src={folder}
        name='hamster'
        open={open}
        handleDoubleClick={handleDoubleClick}
        handleClose={handleClose}
      />
    </Layout>
  );
}

export default Desktop;
