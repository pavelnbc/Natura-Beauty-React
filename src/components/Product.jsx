import React, {Component} from 'react';
import { Thumbnail, Button } from 'react-bootstrap';

class Product extends Component {
  constructor({ medication, getItem }) {
    super({ medication, getItem });

        this.medication = medication;
        this.getItem = getItem;

        this.state = {
            dosageIndicator: 0,
            quantityIndicator: 0,
            priceIndicator: 0,
            price: 0
        };

        this.handleDosage = this.handleDosage.bind(this);
        this.handleQuantity = this.handleQuantity.bind(this);
        this.handlePurchase = this.handlePurchase.bind(this);
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
        return this.medication.price[this.state.dosageIndicator] * this.medication.quantity[this.state.quantityIndicator]
    }

    handlePurchase() {
      this.getItem('img', this.medication.title, this.getPrice())
    }

    render() {
        this.getPrice();

        return (
            <Thumbnail src={`/img/generic-viagra.jpg`} className="product">
                <h4>{this.medication.title}</h4>
                <p>{this.medication.ingredient}</p>

                <h4 className="price"><span>$</span>{this.getPrice()}</h4>
                <p className="dosage-selection">
                    <div className="arrow arrow-left" onClick={() => {this.handleDosage(true)}}>
                        <img src="/img/left-circular.png" alt=""/>
                    </div>
                    <div className="indicator">{this.medication.dosage[this.state.dosageIndicator]}</div>
                    <div className="mg">mg</div>
                    <div className="arrow arrow-right" onClick={() => {this.handleDosage(false)}}>
                        <img src="/img/right-circular.png" alt=""/>
                    </div>
                </p>
                <p className="quantity-selection">
              <div className="arrow arrow-left" onClick={() => { this.handleQuantity(true)}}>
                        <img src="/img/left-circular.png" alt=""/>
                    </div>
                    <div className="indicator">{this.medication.quantity[this.state.quantityIndicator]}</div>
                    <div className="pills">pills</div>
                    <div className="arrow arrow-right" onClick={() => { this.handleQuantity(false)}}>
                        <img src="/img/right-circular.png" alt=""/>
                    </div>
                </p>
                <Button bsStyle="primary"
                        bsSize="xs"
                        className="submit-btn"
                        onClick={() => {this.getItem('img', this.medication.title, this.getPrice())}}>Add to card</Button>
            </Thumbnail>
        )
    }
}

export default Product;
