import {
    faAlarmClock,
    faClock,
    faHourglassEnd,
    faStopwatch,
    type IconDefinition
} from "@fortawesome/free-solid-svg-icons";
import Clock from "../Clock/Clock";
import type { JSX } from "react";

export interface NavItem {
    link: string;
    label: string;
    icon: IconDefinition;
    component: () => JSX.Element;
}

export const navItems: NavItem[] = [
    { link: "/clock", label: "Clock", icon: faClock, component: Clock },
    { link: "/alarm", label: "Alarm", icon: faAlarmClock, component: Clock },
    { link: "/timer", label: "Timer", icon: faHourglassEnd, component: Clock },
    { link: "/stopwatch", label: "Stopwatch", icon: faStopwatch, component: Clock }
];