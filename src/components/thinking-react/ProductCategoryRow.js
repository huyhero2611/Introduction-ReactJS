// show name of category product

import React from "react";
import PropTypes from "prop-types";

ProductCategoryRow.propTypes = {};

function ProductCategoryRow({ category }) {
  console.log(category);
  return <tr style={{ fontSize: "3vmin" }}>{category}</tr>;
}

export default ProductCategoryRow;
