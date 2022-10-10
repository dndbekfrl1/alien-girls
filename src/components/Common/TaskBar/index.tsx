import { useRecoilState } from 'recoil';
import { appState } from 'store';
import styled, { css } from 'styled-components';
import Sound from 'components/Common/TaskBar/Sound';
import Clock from 'components/Common/TaskBar/Clock';
import Start from 'components/Common/TaskBar/Start';
import {
  DecoLayout,
  Deco,
  Divider,
} from 'components/Common/TaskBar/TaskBar.styled';
import { BoxShadowInner } from 'styles/BoxShadow.styled';
import questionMark from 'assets/icons/question-mark.png';
import mp3 from 'assets/icons/mp3.png';
import computer from 'assets/icons/computer.png';

const Layout = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;

  .window {
    height: 190px;
    box-sizing: border-box;

    .window-body {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin: 0;
      padding: 26px 32px;
      box-sizing: border-box;
      height: 100%;
      font-size: 55px;

      .left {
        display: flex;
        height: 100%;
      }
      .right {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 28px;
        ${BoxShadowInner}
      }
    }
  }
`;

const AppBlock = styled.div<{ isActive: boolean }>`
  display: flex;
  width: 950px;
  padding: 0 26px;
  margin-right: 20px;
  box-sizing: border-box;
  background: silver;
  box-shadow: inset -6px -6px #0a0a0a, inset 6px 6px #fff, inset -7px -7px grey,
    inset 7px 7px #dfdfdf;
  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    css`
      box-shadow: inset -6px -6px #ffffff, inset 6px 6px #0a0a0a,
        inset -7px -7px #dfdfdf, inset 7px 7px #808080;
    `}

  span {
    display: flex;
    align-items: center;
    height: 100%;
  }

  img {
    height: 79px;
    margin-right: 31px;
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
            <Deco src={mp3} style={{ width: '82px' }} />
            <Sound />
            <Clock />
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default TaskBar;
