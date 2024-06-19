import { useState, useEffect } from "react";
import "./Paintings.css";

function Paintings() {
  const api = import.meta.env.VITE_X_API_KEY;
  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      try {
        const response = await fetch(
          "https://api.europeana.eu/record/v2/search.json?query=Manet",
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
          <div key="paintings" className="paintings">
            <img src={items.edmPreview[0]} alt="" />
            {/* {paintings.length === 0
              ? ""
              : paintings.map((painting) => {
                  return <img src={painting.edmPreview[0]} />;
                })} */}
          </div>
          {/* Supposed to display title in English */}
          {/* <p>{items.dcTitleLangAware.en}</p> */}
          <p key="country" className="country">
            {items.country}
          </p>
          <p key="museum" className="museum">
            {items.dataProvider}
          </p>
          {/* This should give an English description: */}
          {/* <p>{items.dcDescriptionLangAware.en}</p> */}
          {/* {items.length === 0 ? "" : items.map((items) => {
            return <p {items.dcDescriptionLangAware.en}/>
        })} */}
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
