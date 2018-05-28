import { connect } from "react-redux";
import RobotInstructions from "./RobotInstructions";
import { retrieveRobots } from "../../actions/robotActions";

const mapStateToProps = state => ({
  runs: Object.values(state.entities.runs),
  test: state.entities.runs
});

const mapDispatchToProps = dispatch => ({
  retrieveRobots: () => dispatch(retrieveRobots())
});

export default connect(mapStateToProps, mapDispatchToProps)(RobotInstructions);

