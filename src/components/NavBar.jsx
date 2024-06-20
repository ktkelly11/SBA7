import "./NavBar.css";
import { useState, useEffect } from "react";
import Button from "./Button.jsx";
import { ThemeContext } from "../context/ThemeContext.js";

function Navbar() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const themeLocal = localStorage.getItem("theme");

    if (themeLocal) {
      setTheme(themeLocal);
    }
  }, []);

  return (
    <div className="navbar">
      <ThemeContext.Provider value={theme}>
        <Button
          onClick={() => {
            const newTheme = theme === "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            setTheme(newTheme);
          }}
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </Button>
      </ThemeContext.Provider>
      <button>Home</button>
      <button>Artwork</button>
      <button>Paintings</button>
      <button>Contact</button>
    </div>
  );
}

export default Navbar;
