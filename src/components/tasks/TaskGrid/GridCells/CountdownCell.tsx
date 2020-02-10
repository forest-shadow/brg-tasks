import React, { useState, useEffect, useMemo } from 'react';

import { GridCellProps } from '../TaskGridCell';

const formatNumber = (number: number) => ('0' + number).slice(-2);

const calculateTimeLeft = (endTime: number) => {
  const difference = endTime - +new Date();
  let timeLeft: { [index: string]: string } = {};

  if (difference > 0) {
    timeLeft = {
      hours: formatNumber(Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: formatNumber(Math.floor((difference / 1000 / 60) % 60)),
      seconds: formatNumber(Math.floor((difference / 1000) % 60))
    };
    return timeLeft;
  } else return null;
};

const getEndTime = (value: string) => {
  const [hours, minutes, seconds] = value.split(':');
  const nowDate: Date = new Date();
  return +nowDate.setHours(
    nowDate.getHours() + +hours,
    nowDate.getMinutes() + +minutes,
    nowDate.getSeconds() + +seconds
  );
};

const CountdownCell = ({ value }: GridCellProps) => {
  const endTime = useMemo(() => getEndTime(value), [value]);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endTime));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(endTime));
    }, 1000);

    if (!timeLeft) clearTimeout(timeout);

    return function() {
      clearTimeout(timeout);
    };
  });

  return (
    <span style={{ padding: '3px 16px' }}>
      {timeLeft ? (
        `${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds}`
      ) : (
        <span>Time's up!</span>
      )}
    </span>
  );
};

export default CountdownCell;
