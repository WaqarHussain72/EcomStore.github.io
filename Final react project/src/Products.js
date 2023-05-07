import React from "react";
import styled from "styled-components";

import Sort from "./Components/Sort";
import ProductList from "./Components/ProductsList";
import { useFilterContext } from "./Contextapi/FilterContext";
import FilterSection from "./Components/Filtersection";

const Products = () => {
  const { filter_products } = useFilterContext();
  return (
    <>
      <Wrapper>
        <div className="container grid grid-three-column">

          {/* first column */}
          <div>
          <FilterSection/>
          </div>

          {/* second column */}
          <div className="product-view--sort">
            <div className="sort-filter">
              <Sort />
            </div>
            <div className="main-products">
              <ProductList />
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
};

const Wrapper = styled.section`

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
