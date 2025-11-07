import { useEffect, useState } from "react";

const useSettings = () => {
    
    // Theme Control
    const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");
    
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    // Color Control
    const [showColorPicker, setShowColorPicker] = useState(false);

    return {theme, toggleTheme, showColorPicker, setShowColorPicker}
};

export default useSettings;
