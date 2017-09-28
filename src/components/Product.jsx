import React from 'react';

function Product( {medication} ) {
    return (
        <div class="mdc-card">
            <section class="mdc-card__primary">
                <h1 class="mdc-card__title mdc-card__title--large">{medication.title}</h1>
                <h2 class="mdc-card__subtitle">{medication.ingredient}</h2>
            </section>
            <section class="mdc-card__actions">
                <button class="mdc-button mdc-button--compact mdc-card__action">Add to cart</button>
            </section>
        </div>
    )
}

export default Product;

Product.propTypes = {
    medication: React.PropTypes.object
};