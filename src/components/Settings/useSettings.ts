import { useState } from "react";

const useSettings = () => {
    
    // Theme Control
    const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");

    const toggleTheme = () => {
        setTheme(prevTheme => {
            const theme = prevTheme === "light" ? "dark" : "light";
            
            localStorage.setItem("theme", theme);
            document.documentElement.setAttribute("data-theme", theme);
            
            return theme;
        })
    }

    // Color Control
    const [showColorPicker, setShowColorPicker] = useState(false);

    return {theme, toggleTheme, showColorPicker, setShowColorPicker}
};

export default useSettings;
