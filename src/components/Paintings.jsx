import { useState, useEffect } from "react";
import "./Paintings.css";

function Paintings() {
  const api = import.meta.env.VITE_X_API_KEY;
  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      try {
        const response = await fetch(
          "https://api.europeana.eu/record/v2/search.json?query=Renoir",
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
        <div key={items.id} className="works">
          <div className="images">
            <div key="paintings" className="paintings">
              <img src={items.edmPreview[0]} alt="" />
              {/* {paintings.length === 0
              ? ""
              : paintings.map((painting) => {
                  return <img src={painting.edmPreview[0]} />;
                })} */}
            </div>
          </div>
          {/* Supposed to display title in English */}
          {items?.dcTitleLangAware?.en ? (
            <p>{items.dcTitleLangAware.en[0]}</p>
          ) : (
            ""
          )}
          <div className="info">
            <p key="country" className="country">
              {items.country}
            </p>
            <p key="museum" className="museum">
              {items.dataProvider}
            </p>
          </div>
          {/* This should give an English description: */}
          {/* <p>{items.dcDescriptionLangAware.en}</p> */}
          {/* {items.length === 0 ? "" : items.map((items) => {
            return <p {items.dcDescriptionLangAware.en}/>
        })} */}

          {/* Works but is too long a description */}
          {/* {items?.dcDescriptionLangAware?.en ? (
            <p>{items.dcDescriptionLangAware.en[0]}</p>
          ) : (
            ""
          )} */}
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
