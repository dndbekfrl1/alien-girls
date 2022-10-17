import { AppT } from 'types/app';
import { atom } from 'recoil';

interface appStateT extends AppT {
  apps: AppT[];
}

const defaultAppState = {
  id: 0,
  name: '',
  src: '',
  apps: [],
};

const appState = atom<appStateT>({
  key: 'AppState',
  default: defaultAppState,
});

export { appState, defaultAppState };
