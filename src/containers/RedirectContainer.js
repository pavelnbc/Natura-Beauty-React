import { connect } from 'react-redux';
import RedirectToProds from  '../components/RedirectToProds';

function mapStateToProps(state, ownProps) {
    return {
        searchValue: state.searchValue,
        match: ownProps.match
    }
}

const RedirectContainer = connect(mapStateToProps)(RedirectToProds);


export default RedirectContainer