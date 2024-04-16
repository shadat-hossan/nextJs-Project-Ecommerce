"use client";
import "./countdown.css";
import { useState, useEffect } from "react";

const Countdown = ({ duration }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const getFormatedTime = (milliseconds) => {
    let totalSeconds = parseInt(Math.floor(milliseconds / 1000));
    let totalMinutes = parseInt(Math.floor(totalSeconds / 60));
    let totalHours = parseInt(Math.floor(totalMinutes / 60));
    let days = parseInt(Math.floor(totalHours / 24));

    let seconds = parseInt(totalSeconds % 60);
    let minutes = parseInt(totalMinutes % 60);
    let hours = parseInt(totalHours % 24);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const { days, hours, minutes, seconds } = getFormatedTime(time);

  return (
    <div className="countdownTimer">
      <div className="timees">
        <p>Days</p>
        <h4>{days < 10 ? "0" + days : days}</h4>
      </div>
      <span className="clockPart">:</span>
      <div className="timees">
        <p>Hours</p>
        <h4>{hours < 10 ? "0" + hours : hours}</h4>
      </div>
      <span className="clockPart">:</span>
      <div className="timees">
        <p>Minutes</p>
        <h4>{minutes < 10 ? "0" + minutes : minutes}</h4>
      </div>
      <span className="clockPart">:</span>
      <div className="timees">
        <p>Seconds</p>
        <h4>{seconds < 10 ? "0" + seconds : seconds}</h4>
      </div>
    </div>
  );
};

export default Countdown;
