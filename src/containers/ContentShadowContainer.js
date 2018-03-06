import { connect } from 'react-redux';

import ContentShadow from '../components/ContentShadow';
import { offMenu } from "../actions";

function mapStateToProps(state) {
    return {
        isMenuOpened: state.isMenuOpened
    }
}

function mapDispatchToProps(dispatch) {
    return {
        offMenu: () => dispatch(offMenu())
    }
}

const ContentShadowContainer = connect(mapStateToProps, mapDispatchToProps)(ContentShadow);

export default ContentShadowContainer