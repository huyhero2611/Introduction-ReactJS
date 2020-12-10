import React from "react";

function SearchBar({
  inputSearch,
  setInputSearch,
  inStockOnly,
  setInStockOnly,
}) {
  function handleInputSearch(e) {
    setInputSearch(e.target.value);
  }

  function handleShowStockOnly() {
    setInStockOnly(!inStockOnly);
  }

  return (
    <div>
      <input
        type="text"
        value={inputSearch}
        placeholder="Search..."
        onChange={(e) => handleInputSearch(e)}
      />
      <br></br>
      <input
        type="checkbox"
        id="search"
        onChange={() => handleShowStockOnly()}
      />
      <label for="search">Only show on stocked</label>
    </div>
  );
}

export default SearchBar;
