import Separator from "../Separator/Separator";
import SevenSegmentDigit from "../SevenSegmentDigit/SevenSegmentDigit";
import useStopwatch from "./useStopwatch";
import "./Stopwatch.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { Activity } from "react";

const Stopwatch = () => {
    const { time, laps, startWatch, resetWatch, pauseWatch, addLap, state } =
        useStopwatch();
    console.log("time: ", time);
    console.log("state: ", state);
    return (
        <>
            <div className="stopwatch">
                <div className="time">
                    <SevenSegmentDigit num={time?.hour[0] ?? "0"} />
                    <SevenSegmentDigit num={time?.hour[1] ?? "0"} />
                    <Separator />
                    <SevenSegmentDigit num={time?.min[0] ?? "0"} />
                    <SevenSegmentDigit num={time?.min[1] ?? "0"} />
                    <Separator />
                    <SevenSegmentDigit num={time?.sec[0] ?? "0"} />
                    <SevenSegmentDigit num={time?.sec[1] ?? "0"} />
                    <Separator />
                    <SevenSegmentDigit num={time?.ms[0] ?? "0"} />
                    <SevenSegmentDigit num={time?.ms[1] ?? "0"} />
                    <SevenSegmentDigit num={time?.ms[2] ?? "0"} />
                </div>

                <div className="controls">
                    <Activity mode={state === "idle" ? "visible" : "hidden"}>
                        <button
                            className="btn btn-outline"
                            onClick={startWatch}
                        >
                            Start
                        </button>
                    </Activity>
                    <Activity mode={state !== "idle" ? "visible" : "hidden"}>
                        <button
                            className="btn btn-outline"
                            onClick={resetWatch}
                        >
                            Reset
                        </button>
                        <button
                            className={"btn-circle btn-outline"}
                            onClick={addLap}
                            disabled={state === "paused"}
                        >
                            <FontAwesomeIcon icon={faFlag} />
                        </button>
                        <button
                            className="btn btn-filled"
                            onClick={
                                state === "running" ? pauseWatch : startWatch
                            }
                        >
                            {state === "running" ? "Pause" : "Resume"}
                        </button>
                    </Activity>
                </div>

                <Activity mode={laps.length > 0 ? "visible" : "hidden"}>
                    <div className="laps">
                        {laps.map((lap, idx) => (
                            <div className="lap" key={idx}>
                                {lap}
                            </div>
                        ))}
                    </div>
                </Activity>
            </div>
        </>
    );
};

export default Stopwatch;
