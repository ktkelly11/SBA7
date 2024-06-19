import { useContext } from "react";

export default function Button({ onClick, children }) {
  const theme = useContext();
  const className = "button button-" + theme;
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
