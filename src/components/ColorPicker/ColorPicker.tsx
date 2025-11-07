import "./ColorPicker.scss";
import { Activity, useEffect, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import useClickOutside from "../../_hooks/useClickOutside";

interface ColorPickerProps {
    show: boolean;
    close: () => void;
}

const ColorPicker = ({ show, close }: ColorPickerProps) => {
    const [color, setColor] = useState(
        localStorage.getItem("segment-color") ?? "yellow"
    );
    const colorPickerRef = useRef(null);

    useClickOutside(colorPickerRef, close);

    useEffect(() => {
        localStorage.setItem("segment-color", color);
        document.documentElement.style.setProperty("--segment-color", color);
    }, [color]);

    return (
        <Activity mode={show ? "visible" : "hidden"}>
            <div className="color-picker" ref={colorPickerRef}>
                <HexColorPicker color={color} onChange={setColor} />
            </div>
        </Activity>
    );
};

export default ColorPicker;
