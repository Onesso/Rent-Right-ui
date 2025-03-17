import React from "react";
import "./searchbar.scss";
import { useState } from "react";

//types
const types = ["buy", "rent"];

export default function Searchbar() {
  //state variable
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  //function
  const switchtype = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="searchbar">
        
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchtype(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>

      <form>
        <input type="text" name="location" placeholder="City location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={100000}
          placeholder="min price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={100000}
          placeholder="max price"
        />

        <button>
          <img src="./search.png" />
        </button>
      </form>


    </div>
  );
}
