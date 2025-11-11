import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type MenuItem = { title: string, icon: IconDefinition; callback: () => void };

interface MenuItemProps {
    key: number;
    menuItem: MenuItem;
}

const FabMenuItem = ({ key, menuItem }: MenuItemProps) => {
    return (
        <button
            key={key}
            title={menuItem.title}
            className="fab-menu__item"
            onClick={menuItem.callback}
        >
            <FontAwesomeIcon icon={menuItem.icon} className="fab-menu__icon" />
        </button>
    );
};

export default FabMenuItem;
