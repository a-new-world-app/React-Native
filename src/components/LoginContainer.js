import { connect } from "react-redux";

import Login from "./Login";
import { logIn, logOut } from "../actions/sessionActions";
import { submitAgreement } from "../actions/termActions";

const mapStateToProps = state => ({
  user: state.session,
  terms: state.term,
});

const mapDispatchToProps = dispatch => ({
  logIn: (token) => logIn(token, dispatch),
  logOut: () => dispatch(logOut()),
  submitAgreement: (token, agreement) => dispatch(submitAgreement(token, agreement, dispatch))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
