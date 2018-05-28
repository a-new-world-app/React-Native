import { connect } from "react-redux";
import RobotBuild from "./RobotBuild";
import { retrieveRobots } from "../../actions/robotActions";

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  retrieveRobots: () => dispatch(retrieveRobots())
});

export default connect(mapStateToProps, mapDispatchToProps)(RobotBuild);