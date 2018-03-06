import { connect } from 'react-redux';

import SearchPlugin from '../components/SearchPlugin';
import { getSearchValue } from "../actions";

function mapDispatchToProps(dispatch) {
    return {
        getSearchValue: value => dispatch(getSearchValue(value))
    }
}

const SearchPluginContainer = connect(null, mapDispatchToProps)(SearchPlugin);

export default SearchPluginContainer