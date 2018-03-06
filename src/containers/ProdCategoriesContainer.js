import { connect } from 'react-redux';

import ProdCategories from '../components/ProdCategories';
import { deleteSearchValue } from '../actions'

function mapDispatchToProps(dispatch) {
    return {
        clearSearchValue: () => dispatch(deleteSearchValue())
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories
    }
}

const ProdCategoriesContainer = connect(mapStateToProps, mapDispatchToProps)(ProdCategories);

export default ProdCategoriesContainer