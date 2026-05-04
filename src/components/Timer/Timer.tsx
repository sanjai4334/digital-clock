import Separator from "../Separator/Separator";
import SevenSegmentDigit from "../SevenSegmentDigit/SevenSegmentDigit";
import useTimer from "./useTimer";
import "./Timer.scss";
import { Activity } from "react";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TimerSegment = ({ value }: { value: string | undefined }) => {
  return (
    <div className="time-control">
      <FontAwesomeIcon icon={faAngleUp} className="control" />

      <div className="digit">
        <SevenSegmentDigit num={value?.[0] ?? "0"} />
        <SevenSegmentDigit num={value?.[1] ?? "0"} />
      </div>

      <FontAwesomeIcon icon={faAngleDown} className="control" />
    </div>
  );
};

const Timer = () => {
  const { time, startWatch, resetWatch, pauseWatch, state } = useTimer();
  return (
    <>
      <div className="timer">
        <div className="time">
          <TimerSegment value={time?.hour} />

          <Separator />

          <TimerSegment value={time?.min} />

          <Separator />

          <TimerSegment value={time?.sec} />
        </div>

        <div className="controls">
          <Activity mode={state === "idle" ? "visible" : "hidden"}>
            <button className="btn btn-outline" onClick={startWatch}>
              Start
            </button>
          </Activity>
          <Activity mode={state !== "idle" ? "visible" : "hidden"}>
            <button className="btn btn-outline" onClick={resetWatch}>
              Cancel
            </button>
            <button
              className="btn btn-filled"
              onClick={state === "running" ? pauseWatch : startWatch}
            >
              {state === "running" ? "Pause" : "Resume"}
            </button>
          </Activity>
        </div>
      </div>
    </>
  );
};

export default Timer;
