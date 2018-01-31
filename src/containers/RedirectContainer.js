import { connect } from 'react-redux';
import RedirectToProds from  '../components/RedirectToProds';
import PropTypes from 'prop-types';

function mapStateToProps(state, ownProps) {
    return {
        searchValue: state.searchValue,
        match: ownProps.match
    }
}

const RedirectContainer = connect(mapStateToProps)(RedirectToProds);

RedirectContainer.propTypes = {
    ownProps: PropTypes.object
};

export default RedirectContainer