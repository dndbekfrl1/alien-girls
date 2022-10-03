import styled, { css } from 'styled-components';
import Sound from 'components/Common/TaskBar/Sound';
import Clock from 'components/Common/TaskBar/Clock';
import Start from 'components/Common/TaskBar/Start';
import { useRecoilState } from 'recoil';
import { appState } from 'store';
import calculatePercentage from 'utils/calculatePercentage';
import questionMark from 'assets/icons/question-mark.png';
import mp3 from 'assets/icons/mp3.png';
import computer from 'assets/icons/computer.png';
import {
  DecoLayout,
  Deco,
  Divider,
} from 'components/Common/TaskBar/TaskBar.styled';

const HEIGHT = calculatePercentage(197, 'height');

const Layout = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;

  .window {
    height: calc(100vh * ${HEIGHT});
    box-sizing: border-box;

    .window-body {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin: 0;
      padding: 4px calc(100vw * ${calculatePercentage(32)});
      box-sizing: border-box;
      height: 100%;

      .left {
        display: flex;
        height: 100%;
      }
      .right {
        display: flex;
        align-items: center;
        height: 100%;
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
  const [app, setApp] = useRecoilState(appState);
  const { id: activateId, apps } = app;

  return (
    <Layout>
      <div className='window'>
        <div className='window-body'>
          <div className='left'>
            <Start />
            <DecoLayout>
              <Divider reverse />
              <Divider />
              <Deco src={questionMark} />
              <Deco src={mp3} />
              <Deco src={computer} />
              <Divider />
              <Divider reverse />
            </DecoLayout>
            {apps.length > 0 &&
              apps.map(({ id, name, src }) => (
                <AppBlock
                  className='applications'
                  key={id}
                  isActive={id === activateId}
                  onClick={() => setApp((prev) => ({ ...prev, id }))}
                >
                  <span>
                    <img src={src} alt='' />
                  </span>
                  <span>{name}</span>
                </AppBlock>
              ))}
          </div>
          <div className='right'>
            <Sound />
            <Clock />
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default TaskBar;
export { HEIGHT };
