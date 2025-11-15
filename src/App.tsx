import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Settings from "./components/Settings/Settings";
import { navItems } from "./components/Navigation/navItems";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        if (window.location.pathname === "/") window.location.href = "/clock";
    }, []);

    return (
        <>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    {navItems.map((item) => (
                        <Route
                            key={item.link}
                            path={item.link}
                            Component={item.component}
                        />
                    ))}
                </Routes>
            </BrowserRouter>
            <Settings />
        </>
    );
}

export default App;
