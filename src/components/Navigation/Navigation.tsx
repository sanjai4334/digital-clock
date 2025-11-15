import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";
import { navItems } from "./navItems";

const Navigation = () => {
    return (
        <nav className="nav">
            {navItems.map((item) => (
                <NavLink
                    key={item.link}
                    to={item.link}
                    className={({ isActive }) =>
                        `nav__item ${isActive ? "nav__item--active" : ""}`
                    }
                >
                    <FontAwesomeIcon icon={item.icon} />
                    {item.label}
                </NavLink>
            ))}
        </nav>
    );
};

export default Navigation;
