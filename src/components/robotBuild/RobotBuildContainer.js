import { connect } from "react-redux";

import RobotBuild from "./RobotBuild";
import {getGameData, updateGameData} from '../../actions/gameDataActions';

const mapStateToProps = state => ({
  gameData: state.gameData,
  sessionToken: state.session.sessionToken
});

const mapDispatchToProps = dispatch => ({
  getGameData: (token) => getGameData(token, dispatch),
  updateGameData: (token, gameData) => updateGameData(token, gameData, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(RobotBuild);
