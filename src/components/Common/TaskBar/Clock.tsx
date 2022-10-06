import { useEffect, useState } from 'react';

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
    <div>
      {hour}:{minute} <span />
      {amPm}
    </div>
  );
}
export default Clock;
