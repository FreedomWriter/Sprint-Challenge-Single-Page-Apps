import React, { useState, useEffect } from "react";

export default function SearchForm(props) {
  console.log(`from the search ${props}`);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  useEffect(
    name => {
      const searchResults = name.filter(n => n.toLowerCase().includes(search));
      setResults(searchResults);
    },
    [search]
  );

  const handleSubmit = search => {
    console.log(search);
  };

  return (
    <form className="search-form">
      <input
        value={search}
        onChange={handleChange}
        type="text"
        placeholder="Find your Favorite"
      />
      {/* <input onClick={callSearchFn} type="submit" value="SEARCH" /> */}
    </form>
  );
}
