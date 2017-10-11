import React, {Component} from 'react';
import { Thumbnail, Button } from 'react-bootstrap';

class Product extends Component {
    constructor({medication}) {
        super(medication);
        this.dosage = medication.dosage;
        this.quantity = medication.quantity;
        this.price = medication.price;
        this.state = {
            dosageIndicator: 0,
            quantityIndicator: 0,
            priceIndicator: 0
        };

        this.handleDosage_increase = this.handleDosage_increase.bind(this);
        this.handleDosage_decrease = this.handleDosage_decrease.bind(this);
        this.handleQuantity_increase = this.handleQuantity_increase.bind(this);
        this.handleQuantity_decrease = this.handleQuantity_decrease.bind(this);
        this.getPrice = this.getPrice.bind(this);
     }

    handleDosage_increase() {
        const maxIndicator =  this.dosage.length - 1;
        let dosageIndicator = this.state.dosageIndicator++ < maxIndicator ? this.state.dosageIndicator : maxIndicator;
        this.setState({
            dosageIndicator
        })
    }

    handleDosage_decrease() {
        const minIndicator =  0;
        let dosageIndicator = this.state.dosageIndicator-- > minIndicator ? this.state.dosageIndicator : minIndicator;
        this.setState({
            dosageIndicator
        })
    }

    handleQuantity_increase() {
        const maxIndicator =  this.quantity.length - 1;
        let quantityIndicator = this.state.quantityIndicator++ < maxIndicator ? this.state.quantityIndicator : maxIndicator;
        this.setState({
            quantityIndicator
        })
    }

    handleQuantity_decrease() {
        const minIndicator =  0;
        let quantityIndicator = this.state.quantityIndicator-- > minIndicator ? this.state.quantityIndicator : minIndicator;
        this.setState({
            quantityIndicator
        })
    }

    getPrice() {
        return this.price[this.state.dosageIndicator] * this.quantity[this.state.quantityIndicator];
    }

    render() {
        const {medication} = this.props;

        return (
            <Thumbnail src={`/img/generic-viagra.jpg`} className="product">
                <h4>{medication.title}</h4>
                <p>{medication.ingredient}</p>

                <h4 className="price"><span>$</span>{this.getPrice()}</h4>
                <p className="mg-selection">
                    <div className="arrow-left" onClick={this.handleDosage_decrease}>
                        <img src="/img/left-circular.png" alt=""/>
                    </div>
                    <div className="indicator">{medication.dosage[this.state.dosageIndicator]}</div>
                    <div className="mg">mg</div>
                    <div className="arrow-right" onClick={this.handleDosage_increase}>
                        <img src="/img/right-circular.png" alt=""/>
                    </div>
                </p>
                <p className="quantity-selection">
                    <div className="arrow-left" onClick={this.handleQuantity_decrease}>
                        <img src="/img/left-circular.png" alt=""/>
                    </div>
                    <div className="indicator">{medication.quantity[this.state.quantityIndicator]}</div>
                    <div className="pills">pills</div>
                    <div className="arrow-right" onClick={this.handleQuantity_increase}>
                        <img src="/img/right-circular.png" alt=""/>
                    </div>
                </p>
                <Button bsStyle="primary" bsSize="xs">Add to card</Button>
            </Thumbnail>
        )
    }
}

export default Product;
