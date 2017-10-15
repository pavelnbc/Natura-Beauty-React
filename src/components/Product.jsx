import React, {Component} from 'react';
import { Thumbnail, Button } from 'react-bootstrap';

class Product extends Component {
    constructor({ medication, setProdsVisibility }) {
        super({ medication, setProdsVisibility });

        this.medication = medication;

        this.state = {
            dosageIndicator: 0,
            quantityIndicator: 0,
            priceIndicator: 0,
        };

        this.handleDosage = this.handleDosage.bind(this);
        this.handleQuantity = this.handleQuantity.bind(this);
        this.getPrice = this.getPrice.bind(this);
        this.setProdsVisibility =setProdsVisibility;
     }

    handleDosage(action) {
        if(action) {
            const maxIndicator =  this.medication.dosage.length - 1;
            var dosageIndicator = this.state.dosageIndicator++ < maxIndicator ? this.state.dosageIndicator : maxIndicator;
        } else {
            const minIndicator =  0;
            var dosageIndicator = this.state.dosageIndicator-- > minIndicator ? this.state.dosageIndicator : minIndicator;
        }

        this.setProdsVisibility(true);

        this.setState({
            dosageIndicator
        })
    }

    handleQuantity(action) {
        if(action) {
            const maxIndicator =  this.medication.quantity.length - 1;
            var quantityIndicator = this.state.quantityIndicator++ < maxIndicator ? this.state.quantityIndicator : maxIndicator;
        } else {
            const minIndicator =  0;
            var quantityIndicator = this.state.quantityIndicator-- > minIndicator ? this.state.quantityIndicator : minIndicator;
        }

        this.setProdsVisibility(true);

        this.setState({
            quantityIndicator
        })
    }

    getPrice() {
        return this.medication.price[this.state.dosageIndicator] * this.medication.quantity[this.state.quantityIndicator];
    }

    render() {
        const { medication } = this.props;

        this.getPrice();

        return (
            <Thumbnail src={`/img/generic-viagra.jpg`} className="product">
                <h4>{medication.title}</h4>
                <p>{medication.ingredient}</p>

                <h4 className="price"><span>$</span>{this.getPrice()}</h4>
                <p className="mg-selection">
                    <div className="arrow-left" onClick={() => {this.handleDosage(false)}}>
                        <img src="/img/left-circular.png" alt=""/>
                    </div>
                    <div className="indicator">{medication.dosage[this.state.dosageIndicator]}</div>
                    <div className="mg">mg</div>
                    <div className="arrow-right" onClick={() => {this.handleDosage(true)}}>
                        <img src="/img/right-circular.png" alt=""/>
                    </div>
                </p>
                <p className="quantity-selection">
                    <div className="arrow-left" onClick={() => {this.handleQuantity(false)}}>
                        <img src="/img/left-circular.png" alt=""/>
                    </div>
                    <div className="indicator">{medication.quantity[this.state.quantityIndicator]}</div>
                    <div className="pills">pills</div>
                    <div className="arrow-right" onClick={() => {this.handleQuantity(true)}}>
                        <img src="/img/right-circular.png" alt=""/>
                    </div>
                </p>
                <Button bsStyle="primary" bsSize="xs">Add to card</Button>
            </Thumbnail>
        )
    }
}

export default Product;
