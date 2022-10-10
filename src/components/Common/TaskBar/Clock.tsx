import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  font-size: 48px;
`;

function Clock() {
  const [hour, setHour] = useState<number>();
  const [minute, setMinute] = useState<number>();
  const [amPm, setAmPm] = useState<'AM' | 'PM'>();

  useEffect(() => {
    setInterval(() => {
      let date = new Date();
      let HH = date.getHours();
      let MM = date.getMinutes();

      if (HH >= 12) {
        setAmPm('PM');
        HH -= 12;
      } else {
        setAmPm('AM');
      }

      if (HH === 0) HH = 12;

      setHour(HH);
      setMinute(MM);
    }, 1000);
  }, []);

  return (
    <Layout>
      {hour}:{minute} <span />
      {amPm}
    </Layout>
  );
}
export default Clock;
