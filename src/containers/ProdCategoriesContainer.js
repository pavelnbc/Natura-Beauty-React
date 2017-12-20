import { connect } from 'react-redux';

import ProdCategories from '../components/ProdCategories';

function mapStateToProps(state) {
    return {
        categories: state.categories
    }
}

const ProdCategoriesContainer = connect(mapStateToProps)(ProdCategories);

export default ProdCategoriesContainer