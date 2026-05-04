import { useRef, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

interface Time {
        hour: string;
        min: string;
        sec: string;
    } ;

const useTimer = () => {
    // TODO: Write timer logic
    const [time, setTime] = useState<Time | null>(null);

    const [initialDuration, initialDuration] = useState<Time | null>(null);
    const [remainingTime, setRemainingTime] = useState<Time | null>(null);

    const [state, setState] = useState<"idle" | "running" | "paused">("idle");

    const startRef = useRef<Dayjs>(null);
    const accTimeRef = useRef<number>(undefined);
    const intervalRef = useRef<number>(undefined);


    const updateTime = () => {
        if (!startRef.current) return;

        const diff = dayjs().diff(startRef.current) + (accTimeRef?.current ?? 0);
        const duration = dayjs.duration(diff);

        setTime({
            hour: duration.hours().toString().padStart(2, "0"),
            min: duration.minutes().toString().padStart(2, "0"),
            sec: duration.seconds().toString().padStart(2, "0"),
        });
    };

    const startWatch = () => {
        setState("running");
        startRef.current = dayjs();
        updateTime();
        intervalRef.current = setInterval(updateTime, 10);
    };

    const resetWatch = () => {
        setState("idle");
        clearInterval(intervalRef.current);
        intervalRef.current = undefined;
        setTime(null);
        startRef.current = null;
        accTimeRef.current = undefined;
    };
    
    const pauseWatch = () => {
        setState("paused");
        clearInterval(intervalRef.current);
        
        const diff = dayjs().diff(startRef.current);
        accTimeRef.current = (accTimeRef?.current ?? 0) + diff;
        
        startRef.current = null;
    };

    
    return {
        time,
        startWatch,
        resetWatch,
        pauseWatch,
        state
    };
};

export default useTimer;
