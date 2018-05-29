import { connect } from "react-redux";
import RobotInstructions from "./RobotInstructions";
import {getGameData, updateGameData} from '../../actions/gameDataActions';

const mapStateToProps = state => ({
  gameData: state.gameData,
  sessionToken: state.session.sessionToken
});

const mapDispatchToProps = dispatch => ({
  getGameData: (token) => getGameData(token, dispatch),
  updateGameData: (token, gameData) => updateGameData(token, gameData, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(RobotInstructions);
