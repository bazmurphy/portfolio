import "./Header.css";
import { LuSun, LuMoon } from "react-icons/lu";
import { useState, useEffect } from "react";
import "../../index.css";

const Header = () => {
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
  // console.log(prefersDarkMode.matches);
  const initialColorScheme = prefersDarkMode.matches ? "dark" : "light";

  const [colorScheme, setColorScheme] = useState(initialColorScheme);

  const toggleColorScheme = () => {
    setColorScheme((prevColorScheme) =>
      prevColorScheme === "light" ? "dark" : "light"
    );
  };

  useEffect(() => {
    document.body.className = colorScheme;
  }, [colorScheme]);

  return (
    <header>
      <div className="header-subcontainer">
        <h3>Header</h3>
        <div className="mode-container">
          <button className="mode-button" onClick={toggleColorScheme}>
            {colorScheme === "light" ? (
              <LuMoon className="mode-icon mode-dark-icon" />
            ) : (
              <LuSun className="mode-icon mode-light-icon" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
