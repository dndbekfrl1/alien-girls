import { useEffect, useState } from 'react';
import { QuizButton, Layout, Exploring } from './Quiz.styled';
import styled from 'styled-components';
import QuizLayout from './QuizLayout';

enum Step {
  One = 1,
  Two,
  Three,
}

const StepTwoLayout = styled(Layout)`
  flex-direction: column;

  .answer {
    display: flex;
    align-items: center;
    height: 200px;

    input {
      width: 1200px;
      height: 100%;
      padding: 100px 60px;
      font-size: 96px;
    }
    button {
      margin-left: 20px;
      width: 200px;
      height: 100%;
      font-size: 78px;
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
              <p>정답을 입력하세요!</p>
              <div className='answer'>
                <input
                  name='answer'
                  type='number'
                  value={answer}
                  onChange={(e) => setAnswer(Number(e.target.value))}
                />
                <button
                  onClick={() => {
                    if (answer === ANSWER) {
                      setIsAnswer(true);
                    } else {
                      setIsAnswer(false);
                    }
                    setIsSubmit(true);
                  }}
                >
                  제출
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
