import React from 'react';

import Product from '../components/Product'

import products from '../data/products.json';

function Products() {
    return (
        <div class="mdc-layout-grid">
            <div class="mdc-layout-grid__inner">
                {products.map((product, index) => {
                    return (
                        <div key={index} className="mdc-layout-grid__cell">
                            <Product medication={product} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Products

//<Product medication={product}  key={index} className="mdc-layout-grid__cell"/>