import "./Header.css";
import { LuSun, LuMoon } from "react-icons/lu";
import { useState } from "react";

const Header = () => {
  // refactor to context & provider etc.
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <header>
      <h3>Header</h3>
      <div className="mode-container">
        {isDarkMode && (
          <button
            className="mode-button"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            <LuSun className="mode-icon mode-light-icon" />
          </button>
        )}
        {!isDarkMode && (
          <button
            className="mode-button"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            <LuMoon className="mode-icon mode-dark-icon" />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
