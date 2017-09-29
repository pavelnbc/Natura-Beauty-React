import React from 'react';
import { Thumbnail, Button } from 'react-bootstrap';

function Product( {medication} ) {
    return (
        <Thumbnail src={`/img/generic-viagra.jpg`} className="product">
            <h4>{medication.title}</h4>
            <p>{medication.ingredient}</p>
            <p>
                <Button bsStyle="primary">Add to card</Button>
            </p>
        </Thumbnail>
    )
}

export default Product;

Product.propTypes = {
    medication: React.PropTypes.object
};

/*
<div class="mdc-card">
    <section class="mdc-card__primary">
        <h4 class="mdc-card__title mdc-card__title--large">{medication.title}</h4>
        <p class="mdc-card__subtitle">{medication.ingredient}</p>
    </section>
    <section class="mdc-card__actions">
        <button class="mdc-button mdc-button--compact mdc-card__action">Add to cart</button>
    </section>
</div>*/
