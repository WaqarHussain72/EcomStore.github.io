import React from 'react';
import { useFilterContext } from '../Contextapi/FilterContext';
import GridView from './Gridview';
import ListView from './ListView';

function ProductList() {
    const { filter_products, grid_view } = useFilterContext();


    if (grid_view === true) {
        return <GridView products={filter_products} />
    }

    if (grid_view === false) {
        return <ListView products={filter_products} />
    }
};

export default ProductList;