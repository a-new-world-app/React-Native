import React from "react";
import { connect } from "react-redux";
import { submitAgreement } from "../actions/termActions";


class agreementModal extends React.Component {
 //  <Modal
 //   animationType="slide"
 //   transparent={false}
 //   visible={this.state.openModal}
 //   onRequestClose={() => {
 //      this.setState({openModal:false});
 //   }}>
 //   <View style={{marginTop: 22}}>
 //     <View>
 //       <Text>Hello World!</Text>
 //
 //       <TouchableOpacity
 //         onPress={() => {
 //           Alert.alert('', 'By clicking agreed, you agreed to our terms',
 //           [ { text: 'OK',
 //             onPress: () => {
 //
 //               this.setState({openModal:false});} },
 //             { text: 'Cancel', onPress: () => {} }],
 //           { onDismiss: () => {} })
 //           }
 //         } >
 //         <Text>Agreed</Text>
 //       </TouchableOpacity>
 //     </View>
 //   </View>
 // </Modal>
}

  const mapStateToProps = state => ({
    sessionToken: state.session.token,
  });

  const mapDispatchToProps = dispatch => ({
    submitAgreement: (token) => dispatch(submitAgreement(token))
  });

export default connect(mapStateToProps, mapDispatchToProps)(agreementModal);
