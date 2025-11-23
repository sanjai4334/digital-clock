import { useEffect, useState } from "react";
import "./Clock.scss";
import SevenSegmentDigit from "../SevenSegmentDigit/SevenSegmentDigit";
import Separator from "../Separator/Separator";

const Clock = () => {
    const [time, setTime] = useState<{
        hour: string;
        min: string;
        sec: string;
    }>();

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime({
                hour: now.getHours().toString().padStart(2, "0"),
                min: now.getMinutes().toString().padStart(2, "0"),
                sec: now.getSeconds().toString().padStart(2, "0")
            });
        };

        updateTime();
        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            {time && (
                <div className="clock">
                    <SevenSegmentDigit num={time.hour[0]} />
                    <SevenSegmentDigit num={time.hour[1]} />
                    <Separator />
                    <SevenSegmentDigit num={time.min[0]} />
                    <SevenSegmentDigit num={time.min[1]} />
                    <Separator />
                    <SevenSegmentDigit num={time.sec[0]} />
                    <SevenSegmentDigit num={time.sec[1]} />
                </div>
            )}
        </>
    );
};

export default Clock;
