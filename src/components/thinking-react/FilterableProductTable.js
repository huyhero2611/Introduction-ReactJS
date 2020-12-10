import React, { useState } from "react";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

FilterableProductTable.propTypes = {};

function FilterableProductTable(props) {
  const [inputSearch, setInputSearch] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [showProduct, setShowProduct] = useState([]);
  console.log(
    showProduct.map((value, key) => {
      return value.name;
    })
  );
  return (
    <form>
      <SearchBar
        inputSearch={inputSearch}
        setInputSearch={setInputSearch}
        inStockOnly={inStockOnly}
        setInStockOnly={setInStockOnly}
      />
      <ProductTable
        inputSearch={inputSearch}
        inStockOnly={inStockOnly}
        showProduct={showProduct}
        setShowProduct={setShowProduct}
      />
    </form>
  );
}
export default FilterableProductTable;
