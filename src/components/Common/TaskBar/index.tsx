import styled, { css } from 'styled-components';
import Music from 'components/Common/TaskBar/Music';
import Clock from 'components/Common/TaskBar/Clock';
import Start from 'components/Common/TaskBar/Start';
import { useRecoilValue } from 'recoil';
import { appState } from 'store';

const Height = 40;

const Layout = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;

  .window {
    height: ${Height}px;
    box-sizing: border-box;

    .window-body {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin: 0;
      height: 100%;

      .left {
        display: flex;
        height: 100%;
      }
      .right {
        display: flex;
        align-items: center;
      }
    }
  }
`;

const AppBlock = styled.div<{ isActive: boolean }>`
  display: flex;
  width: 200px;
  background: silver;
  box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey,
    inset 2px 2px #dfdfdf;
  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    css`
      box-shadow: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a,
        inset -2px -2px #dfdfdf, inset 2px 2px #808080;
    `}

  span {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 4px;
  }

  img {
    height: 60%;
  }
`;

function TaskBar() {
  const app = useRecoilValue(appState);
  const { id: activateId, apps } = app;

  return (
    <Layout>
      <div className='window'>
        <div className='window-body'>
          <div className='left'>
            <Start />
            {apps.length > 0 &&
              apps.map(({ id, name, src }) => (
                <AppBlock
                  className='applications'
                  key={id}
                  isActive={id === activateId}
                >
                  <span>
                    <img src={src} alt='' />
                  </span>
                  <span>{name}</span>
                </AppBlock>
              ))}
          </div>
          <div className='right'>
            <Music />
            <Clock />
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default TaskBar;
export { Height };
