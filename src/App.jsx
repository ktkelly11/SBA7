import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/NavBar.jsx";
import Paintings from "./components/Paintings.jsx";
import Button from "./components/Button.jsx";

function App() {
  // const url = `https://api.europeana.eu/record/v2/search.json?query=${query}`;
  // console.log(url);
  // const api = import.meta.env.VITE_X_API_KEY;
  // const [paintings, setPaintings] = useState([]);

  // useEffect(() => {
  //   getPaintings();
  // }, []);

  // const getPaintings = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://api.europeana.eu/record/v2/search.json?query=Monet"
  //     );
  //     const data = await response.json();
  //     setPaintings(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   async function fetchAPI() {
  //     try {
  //       const response = await fetch(url, {
  //         headers: {
  //           "X-Api-Key": api,
  //         },
  //       });
  //       const data = await response.json();
  //       setPaintings(data.items);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   fetchAPI();
  // }, []);

  return (
    <>
      {/* <Button
        onClick={() => {
          const newTheme = theme === "dark" ? "light" : "dark";
          localStorage.setItem("theme", newTheme);
          setTheme(newTheme);
        }}
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </Button> */}
      <Navbar />
      <Paintings />
      <h1>Working on my art gallery</h1>
    </>
  );
}

export default App;
