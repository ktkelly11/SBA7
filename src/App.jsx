// import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/NavBar.jsx";
import Paintings from "./components/Paintings.jsx";
import Heading from "./components/Heading.jsx";
// import { reducerFn } from "./utils/reducerFn.jsx";
import { useReducer } from "react";

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

  // const initialState = {};
  // const [state, dispatch] = useReducer(reducerFn, initialState);

  const initialState = { input: "" };
  const reducer = (state, action) => {
    switch (action.type) {
      case "input":
        return { ...state, input: action.payload };
      default:
        console.log(`Action ${action.type} not found`);
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleInputChange = (e) => {
    dispatchEvent({ type: "input", payload: e.target.value });
  };

  return (
    <>
      <Navbar />
      <Heading />
      <Paintings />
      {/* <h1>Working on my art gallery</h1> */}
      <h1>Thanks for visiting the online art gallery!</h1>
      <input type="text" value={state.input} onChange={handleInputChange} />
      <p className="output">{state.input.trim() || "User input"}</p>
    </>
  );
}

export default App;
