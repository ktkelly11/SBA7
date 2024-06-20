import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.js";

export default function Button({ onClick, children }) {
  const theme = useContext(ThemeContext);
  const className = "button button-" + theme;
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
