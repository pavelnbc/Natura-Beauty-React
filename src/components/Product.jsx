import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { Thumbnail, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import classNames from 'classnames';

class Product extends Component {
  constructor({ getItem }) {
    super({ getItem });

        this.getItem = getItem;

        this.state = {
            dosageIndicator: 0,
            quantityIndicator: 0,
            priceIndicator: 0,
            saleCoefs: [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4],
            orderID: 0
        };

        this.handleDosage = this.handleDosage.bind(this);
        this.handleQuantity = this.handleQuantity.bind(this);
        this.getPrice = this.getPrice.bind(this);
  }

    handleDosage(action) {    // Выбор дозы продукта. action: true(increase)/false(decrease)
        if(action) {
            const maxIndicator =  this.medication.dosage.length - 1;
            var dosageIndicator = this.state.dosageIndicator++ < maxIndicator ? this.state.dosageIndicator : maxIndicator;
        } else {
            const minIndicator =  0;
            dosageIndicator = this.state.dosageIndicator-- > minIndicator ? this.state.dosageIndicator : minIndicator;
        }

        this.setState({
            dosageIndicator
        })
    }

    handleQuantity(action) {    // Выбор количества таблеток продукт. action: true(increase)/false(decrease)
        if(action) {
            const maxIndicator =  this.medication.quantity.length - 1;
            var quantityIndicator = this.state.quantityIndicator++ < maxIndicator ? this.state.quantityIndicator : maxIndicator;
        } else {
            const minIndicator =  0;
            quantityIndicator = this.state.quantityIndicator-- > minIndicator ? this.state.quantityIndicator : minIndicator;
        }

        this.setState({
            quantityIndicator
        })
    }

    getPrice() {    // Определение цены продукта
        let price = this.medication.price[this.state.dosageIndicator]
            * this.medication.quantity[this.state.quantityIndicator]
            * this.state.saleCoefs[this.state.quantityIndicator];

        return price
    }

    render() {
        this.medication = this.props.medication;
        this.appearance = this.props.handleAppearance;

        let purchaseObj = {
            img: `/img/${this.medication.slug}.jpg`,
            title: this.medication.title,
            price: this.getPrice(),
            id: this.state.orderID++,
            dosage: this.medication.dosage[this.state.dosageIndicator],
            quantity: this.medication.quantity[this.state.quantityIndicator]
        };

        return (
            <Thumbnail src={`/img/pills.png`} className="product">
                <div className="controls" onClick={this.appearance}>
                    <h4 className="price"><span>$</span>{this.getPrice().toFixed(2)}</h4>
                    <p className="dosage-selection">
                        <div className="arrow arrow-left" onClick={() => {this.handleDosage(true)}}>
                            <FontAwesome name="chevron-up" size="2x" />
                        </div>
                        <div className="indicator">
                            {this.medication.dosage[this.state.dosageIndicator]}
                            <div className="mg">mg</div>
                        </div>
                        <div className="arrow arrow-right" onClick={() => {this.handleDosage(false)}}>
                            <FontAwesome name="chevron-down" size="2x" />
                        </div>
                    </p>
                    <p className="quantity-selection">
                        <div className="arrow arrow-left" onClick={() => { this.handleQuantity(true)}}>
                            <FontAwesome name="chevron-up" size="2x" />
                        </div>
                        <div className="indicator">
                            {this.medication.quantity[this.state.quantityIndicator]}
                            <div className="pills">pills</div>
                        </div>
                        <div className="arrow arrow-right" onClick={() => { this.handleQuantity(false)}}>
                            <FontAwesome name="chevron-down" size="2x" />
                        </div>
                    </p>
                    <Button bsStyle="info"
                            bsSize="sm"
                            className="submit-btn"
                            onClick={() => {this.getItem(purchaseObj)}}
                    >
                        Add to card
                    </Button>
                </div>
                <NavLink to={`/products/${this.medication.category}/${this.medication.slug}`}
                         className="info-btn"
                >
                    <img src="/img/triangle.png"/>
                </NavLink>
                <h4>{this.medication.title}</h4>
                <p>{this.medication.ingredient}</p>
            </Thumbnail>
        )
    }
}

export default Product;


/* <h4 className="price"><span>$</span>{this.getPrice()}</h4>
 <p className="dosage-selection">
 <div className="arrow arrow-left" onClick={() => {this.handleDosage(true)}}>
 <FontAwesome name="chevron-up" />
 </div>
 <div className="indicator">
 {this.medication.dosage[this.state.dosageIndicator]}
 <div className="mg">mg</div>
 </div>
 <div className="arrow arrow-right" onClick={() => {this.handleDosage(false)}}>
 <FontAwesome name="chevron-down" />
 </div>
 </p>
 <p className="quantity-selection">
 <div className="arrow arrow-left" onClick={() => { this.handleQuantity(true)}}>
 <FontAwesome name="chevron-up" />
 </div>
 <div className="indicator">
 {this.medication.quantity[this.state.quantityIndicator]}
 <div className="pills">pills</div>
 </div>
 <div className="arrow arrow-right" onClick={() => { this.handleQuantity(false)}}>
 <FontAwesome name="chevron-down" />
 </div>
 </p>
 <Button bsStyle="info"
 bsSize="xs"
 className="submit-btn"
 onMouseDown={() => {this.setState({isProductActive: true})}}
 onMouseUp={() => {
 this.getItem(purchaseObj);
 this.setState({isProductActive: false})
 }
 }
 >
 Add to card
 </Button>*/