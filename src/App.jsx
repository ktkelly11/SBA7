import { useState } from "react";
import "./App.css";
import Navbar from "./components/NavBar.jsx";

function App() {
  const url = import.meta.env.VITE_API_URL;
  // console.log(url);
  const api = import.meta.env.VITE_X_API_KEY;
  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      try {
        const response = await fetch(url, {
          headers: {
            "X-Api-Key": api,
          },
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  return (
    <>
      <Navbar />
      <h1>Working on my art gallery</h1>
    </>
  );
}

export default App;
