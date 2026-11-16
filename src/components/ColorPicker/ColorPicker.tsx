import "./ColorPicker.scss";
import { Activity, useEffect, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import useClickOutside from "../../_hooks/useClickOutside";
import { getStoredItem, setStoredItem } from "../../utils/storage";

interface ColorPickerProps {
    show: boolean;
    close: () => void;
}

const ColorPicker = ({ show, close }: ColorPickerProps) => {
    const [color, setColor] = useState(
        () => getStoredItem("segment-color") ?? "yellow"
    );
    const colorPickerRef = useRef(null);

    useClickOutside(colorPickerRef, close);

    useEffect(() => {
        setStoredItem("segment-color", color);
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
