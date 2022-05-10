import React, { useState,useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  useEffect(() => {
      console.log("a");
  }, [])

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter Search Term</label>
          <input
            type="text"
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
