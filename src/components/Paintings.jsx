import { useState, useEffect } from "react";

function Paintings() {
  const api = import.meta.env.VITE_X_API_KEY;
  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      try {
        const response = await fetch(
          "https://api.europeana.eu/record/v2/search.json?query=DaVinci",
          {
            headers: {
              "X-Api-Key": api,
            },
          }
        );
        const data = await response.json();
        setPaintings(data.items);
      } catch (err) {
        console.log(err);
      }
    }
    fetchAPI();
  }, []);

  return (
    <>
      {paintings.map((items) => (
        <div key={items.id}>
          {paintings.length === 0
            ? ""
            : paintings.map((painting) => {
                return <img src={painting.edmPreview[0]} />;
              })}
          <p>{items.country}</p>
        </div>
      ))}

      {/* {paintings.map((items) => (
        <div key={items.id}>
          <p>{items.edmPreview[0]}</p>
          <p>{items.dcCreater}</p>
          <p>{items.country}</p>
        </div>
      ))} */}
    </>
  );
}

export default Paintings;
