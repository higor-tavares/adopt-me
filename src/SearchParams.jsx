import { React, useState } from "react";
const SearchParams = () => {
  const [location, setLocation] = useState("");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="locations">Location</label>
        <input
          id="location"
          type="text"
          value={location}
          placeholder="location"
          onChange={(e) => setLocation(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
