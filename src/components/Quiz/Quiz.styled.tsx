import quizButton from 'assets/images/quiz/quiz-btn.png';
import styled from 'styled-components';
import spaceShip from 'assets/images/quiz/space-ship.gif';

const QuizButton = styled.div`
  width: 919px;
  height: 155px;
  background: url(${quizButton}) no-repeat;
  background-size: cover;
  cursor: pointer;
`;

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Exploring = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 30;
  width: 100vw;
  height: 100vh;
  background: #000;
  font-size: 96px;
  color: #fff;
  letter-spacing: 10px;

  .space-ship {
    width: 1260px;
    height: 1080px;
    background: url(${spaceShip}) no-repeat;
    background-size: cover;
  }
`;

export { QuizButton, Layout, Exploring };
