import { useEffect, useState } from 'react';
import { QuizButton, Layout, Exploring } from './Quiz.styled';
import styled from 'styled-components';
import QuizLayout from './QuizLayout';
import { BoxShadowOuter } from 'styles/BoxShadow.styled';
import quizAni from 'assets/images/quiz/quiz.gif';
import alien from 'assets/images/quiz/alien.png';

enum Step {
  One = 1,
  Two,
  Three,
}

const Deco = styled.div<{ src: string }>`
  width: 105px;
  height: 105px;
  margin: 0 10px;
  background: url(${({ src }) => src}) center no-repeat;
  background-size: contain;
`;

const Typo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 118px 0 96px 0;
  font-size: 60px;
`;

const Window = styled.div`
  box-sizing: border-box;
  ${BoxShadowOuter}
  padding: 22px;
  font-size: 48px;
  cursor: pointer;

  .window-body {
    height: fit-content;
  }

  .title-bar {
    display: flex;
    align-items: center;
    height: 110px;
    padding: 8px 42px;

    .title-bar-text {
      display: flex;
      align-items: center;
      font-size: 48px;

      span {
        margin-left: 16px;
      }
    }
    .title-bar-controls {
      button {
        width: 87px;
        height: 76px;
        background-size: 58px;
        background-position: center;
        ${BoxShadowOuter}
        font-size: 55px;
      }
      button[aria-label='Minimize'] {
        background-position-y: bottom;
      }
    }
  }
`;

const StepTwoLayout = styled(Layout)`
  flex-direction: column;
  margin-top: 240px; // TODO 개선필요

  .answer {
    display: flex;
    align-items: center;
    height: 120px;

    input {
      width: 1200px;
      height: 100%;
      padding: 0 40px;
      box-sizing: border-box;
      font-size: 52px;
    }
    button {
      margin-left: 20px;
      width: 366px;
      height: 100%;
      font-size: 52px;
      font-weight: 400;
    }
  }
`;

const WrongLayout = styled(Layout)`
  button.retry {
    padding: 0 60px;
    height: 200px;
    margin-left: 20px;
    font-size: 78px;
  }
`;

function Correct() {
  return (
    <Layout>
      <h1>정답입니다.</h1>
    </Layout>
  );
}

function Wrong({ handleRetry }: any) {
  return (
    <WrongLayout>
      <h1>틀렸습니다.</h1>
      <button className='retry' onClick={handleRetry}>
        다시 도전하기
      </button>
    </WrongLayout>
  );
}

function Question({ onClose }: { onClose: any }) {
  const [step, setStep] = useState(Step.One);
  const [answer, setAnswer] = useState<number>();
  const [isAnswer, setIsAnswer] = useState<boolean>();
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStep(Step.Two); // TODO 개선필요
    }, 4000);
  }, []);

  const handleRetry = () => {
    setStep(Step.Two);
    setIsSubmit(false);
  };

  if (!isSubmit) {
    return (
      <>
        {step === Step.One && (
          <Exploring>
            <div className='space-ship' />
            <p>EXPLORING...</p>
          </Exploring>
        )}
        {step !== Step.One && (
          <QuizLayout onClose={onClose}>
            <StepTwoLayout>
              <Window className='window'>
                <div className='title-bar'>
                  <div className='title-bar-text'>
                    <span>file_x_you</span>
                  </div>
                  <div className='title-bar-controls'>
                    <button aria-label='Minimize' />
                    <button aria-label='Maximize' />
                    <button aria-label='Close' />
                  </div>
                </div>
                <div className='window-body'>
                  <img src={quizAni} />
                </div>
              </Window>
              <Typo>
                당신의 찾은 외계인은 모두 몇 명인가요? <Deco src={alien} />
                <Deco src={alien} />
              </Typo>
              <div className='answer'>
                <input
                  name='answer'
                  type='number'
                  value={answer}
                  onChange={(e) => setAnswer(Number(e.target.value))}
                />
                <button
                  onClick={() => {
                    /** TODO 
                    if (answer === ANSWER) {
                      setIsAnswer(true);
                    } else {
                      setIsAnswer(false);
                    }
                    setIsSubmit(true);
                    */
                  }}
                >
                  입력
                </button>
              </div>
            </StepTwoLayout>
          </QuizLayout>
        )}
      </>
    );
  }

  return (
    <>
      {isAnswer && (
        <QuizLayout onClose={onClose}>
          <Correct />
        </QuizLayout>
      )}
      {!isAnswer && (
        <QuizLayout onClose={onClose}>
          <Wrong handleRetry={handleRetry} />
        </QuizLayout>
      )}
    </>
  );
}

function Quiz() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <QuizButton onClick={() => setOpen(true)} />
      {open && <Question onClose={() => setOpen(false)} />}
    </>
  );
}

export default Quiz;

const ANSWER = 3;
