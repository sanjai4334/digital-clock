import { useEffect, useState } from "react";
import { getStoredItem, setStoredItem } from "../../utils/storage";

const useSettings = () => {
    
    // Theme Control
    const [theme, setTheme] = useState(() => getStoredItem("theme") ?? "dark");
    
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        setStoredItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    // Color Control
    const [showColorPicker, setShowColorPicker] = useState(false);

    return {theme, toggleTheme, showColorPicker, setShowColorPicker}
};

export default useSettings;
