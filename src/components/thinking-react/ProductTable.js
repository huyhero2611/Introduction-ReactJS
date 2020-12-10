import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

ProductTable.propTypes = {};

function ProductTable({
  inputSearch,
  inStockOnly,
  showProduct,
  setShowProduct,
}) {
  useEffect(() => {
    setShowProduct(data_test);
  }, []);

  const rows = [];
  let lastCategory = null;

  if (showProduct !== null) {
    showProduct.forEach((product) => {
      if (product.name.indexOf(inputSearch) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
  }

  return (
    <div>
      <table style={{ textAlign: "center" }}>
        <thead>
          <th>Name</th>
          <th>Price</th>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default ProductTable;

const data_test = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  {
    category: "Electronics",
    price: "$199.99",
    stocked: true,
    name: "Nexus 7",
  },
];
