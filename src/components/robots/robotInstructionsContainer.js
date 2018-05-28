import { connect } from "react-redux";
import RobotInstructions from "./RobotInstructions";
import { retrieveRobots } from "../../actions/robotActions";

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  retrieveRobots: () => dispatch(retrieveRobots())
});

export default connect(mapStateToProps, mapDispatchToProps)(RobotInstructions);

