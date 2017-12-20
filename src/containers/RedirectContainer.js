import { connect } from 'react-redux';
import RedirectToProds from  '../components/RedirectToProds';

function mapStateToProps(state) {
    return {
        searchValue: state.searchValue
    }
}

const RedirectContainer = connect(mapStateToProps)(RedirectToProds);


export default RedirectContainer