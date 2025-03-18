import "/search.png";
import "./filter.scss";

export default function Filter() {
  return (
    <div className="Filter">
      <h1>
        Search results for <b>Nairobi</b>
      </h1>

      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="City location"
          />
        </div>
      </div>

      <div className="bottom">
        <div className="item">
          <label htmlFor="type">type</label>
          <select name="type" id="type">
            <option value="">any</option>
            <option value="buy">buy</option>
            <option value="rent">rent</option>
          </select>
        </div>

        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
            <option value="house">House</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="city">Min Price</label>
          <input
            type="number"
            name="minPrice"
            id="minPrice"
            placeholder="Any"
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="number"
            name="maxPrice"
            id="maxPrice"
            placeholder="Any"
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input type="text" name="bedroom" id="bedroom" placeholder="Any" />
        </div>
        <button>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
}
