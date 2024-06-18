import { useState } from "react";
import "./App.css";
import Navbar from "./components/NavBar.jsx";

function App() {
  const url = import.meta.env.VITE_API_URL;
  // console.log(url);

  return (
    <>
      <Navbar />
      <h1>Working on my art gallery</h1>
    </>
  );
}

export default App;
