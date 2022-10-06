import styled from 'styled-components';
import window from 'assets/icons/windows.png';
import { useState } from 'react';
import calculatePercentage from 'utils/calculatePercentage';

const Layout = styled.div`
  width: calc(100vw * ${calculatePercentage(326)});
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  img {
    width: 40%;
  }

  p {
    margin-left: 4px;
    font-size: 12px;
    font-weight: bold;
  }
`;

const ManagerLayout = styled.div`
  position: absolute;
  bottom: 48px;
  left: 0;
  background: silver;
  width: 20%;
  height: 340px;
  box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey,
    inset 2px 2px #dfdfdf;
`;

function Start() {
  const [open, setOpen] = useState(false);

  return (
    <Layout>
      <Button type='button' onClick={() => setOpen((prev) => !prev)}>
        <img src={window} alt='' />
        <p>Start</p>
      </Button>
      {open && (
        <ManagerLayout>
          <p>(비어 있음)</p>
        </ManagerLayout>
      )}
    </Layout>
  );
}

export default Start;
