import { faDroplet, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import FabMenu from "../FabMenu/FabMenu";
import useSettings from "./useSettings";
import ColorPicker from "../ColorPicker/ColorPicker";

const Settings = () => {
    const { theme, toggleTheme, showColorPicker, setShowColorPicker } =
        useSettings();

    return (
        <>
            <FabMenu
                menuItems={[
                    {
                        icon: theme === "dark" ? faMoon : faSun,
                        callback: toggleTheme
                    },
                    {
                        icon: faDroplet,
                        callback: () => setShowColorPicker(!showColorPicker)
                    }
                ]}
            />
            <ColorPicker
                show={showColorPicker}
                close={() => setShowColorPicker(false)}
            />
        </>
    );
};

export default Settings;
