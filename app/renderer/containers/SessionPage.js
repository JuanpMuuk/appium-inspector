import {connect} from 'react-redux';

import * as SessionActions from '../actions/Session';
import Session from '../components/Session/Session';
import {withTranslation} from '../util';

function mapStateToProps(state) {
  return state.session;
}

export default withTranslation(Session, connect(mapStateToProps, SessionActions));
