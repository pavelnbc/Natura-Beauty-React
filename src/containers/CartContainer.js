import { connect } from 'react-redux';

import Cart from "../pages/Cart";
import { deleteFromCart } from '../actions';




function mapStateToProps(state) {
  return {
    productList: state.cartItems,
    totalAmount: state.totalPrice
  }
}

function mapDispatchtoProps(dispatch) {
  return {
    deleteOrderItem: id => dispatch(deleteFromCart(id))
  }
}

const CartContainer = connect(mapStateToProps, mapDispatchtoProps)(Cart);









// class CartContainer extends Component {
//     constructor(props, context) {
//         super(props, context);

//         this.store = this.context.store;


//         this.deleteCartItem = this.deleteCartItem.bind(this);
//     }

//     componentDidMount() {
//         this.unsubscribe = this.store.subscribe(() => this.forceUpdate());
//         console.log(this.context.store.getState());
//     }

//     componentWillUnmount() {
//         this.unsubscribe();
//     }

//     deleteCartItem(id) {        // Удаление товаров из корзины
//       this.store.dispatch(deleteFromCart(id))
//     }



//     render() {
//        let productList = this.store.getState().items;
//        let totalAmount = this.store.getState().totalPrice;

//        console.log('hi')

//        return <Cart productList={productList} totalAmount={totalAmount} deleteOrderItem={this.deleteCartItem} />         
//     }
// }

// CartContainer.contextTypes = {
//     store: React.PropTypes.object
// };

export default CartContainer;