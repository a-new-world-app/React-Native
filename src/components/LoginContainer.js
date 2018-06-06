import { connect } from "react-redux";

import Login from "./Login";
import { logIn, logOut } from "../actions/sessionActions";

const mapStateToProps = state => ({
  user: state.session,
});

const mapDispatchToProps = dispatch => ({
  logIn: (token) => logIn(token, dispatch),
  logOut: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
