import { connect } from "react-redux";
import RobotInstructions from "./RobotInstructions";
import { retrieveRobots } from "../../actions/run_actions";

const mapStateToProps = state => ({
  runs: Object.values(state.entities.runs),
  test: state.entities.runs
});

const mapDispatchToProps = dispatch => ({
  retrieveRuns: () => dispatch(retrieveRuns())
});

export default connect(mapStateToProps, mapDispatchToProps)(RunIndex);

