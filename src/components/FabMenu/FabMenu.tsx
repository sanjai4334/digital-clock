import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./FabMenu.scss";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import type { MenuItem } from "./FabMenuItem";
import FabMenuItem from "./FabMenuItem";
import useClickOutside from "../../_hooks/useClickOutside";

interface FabMenuProps {
    menuItems: MenuItem[];
}

const FabMenu = ({ menuItems }: FabMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    useClickOutside(menuRef, () => setIsOpen(false));

    return (
        <div
            ref={menuRef}
            className={`fab-menu ${isOpen ? "fab-menu--open" : ""}`}
        >
            <button
                className="fab-menu__item fab-menu__item--toggle"
                onClick={() => setIsOpen(!isOpen)}
            >
                <FontAwesomeIcon icon={faGear} className="fab-menu__icon" />
            </button>

            {menuItems.map((menuItem: MenuItem, index: number) => {
                return <FabMenuItem key={index} menuItem={menuItem} />;
            })}
        </div>
    );
};

export default FabMenu;
