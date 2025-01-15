import { useRef, useState } from "react";

export default function useCountdownTimer(
  callback: Function,
  timeout: number = 3000
) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  const timerRef = useRef(null);

  const clearTimer = () => {
    clearTimeout(timerRef.current);
  };

  const resetTimer = (...subprops) => {
    clearTimer();
    setRemainingTime(timeout);
    startTimer(...subprops);
  };

  const startTimer = (...subprops) => {
    timerRef.current = setTimeout(() => {
      callback(...subprops);
      clearTimer();
    }, remainingTime);
  };

  return {
    startTimer,
    clearTimer,
    resetTimer,
  };
}
