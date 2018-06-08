import React from "react";
import { StyleSheet,
TextInput,
View,
Button,
Linking,
ImageBackground,
FlatList,
TouchableOpacity,
Image,
Text,
Modal,
Alert } from 'react-native';
import { connect } from "react-redux";
import { submitAgreement } from "../actions/termActions";


class agreementModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openModal: this.props.session.agree
      ? false
      : true
    };
  }

  render(){
  
    return (
      this.state.openModal ? (
    <Modal
     animationType="slide"
     transparent={false}
     visible= {this.state.openModal}
     onRequestClose={() => {
        this.setState({openModal:false});
     }}>
     <View style={{marginTop: 22}}>
       <View>
         <Text>Please confirm following terms to continue</Text>
         <Text>Safety</Text>
           <Text>Be mindful of foot traffic and stand off to the side while entering descriptions/adding photographs</Text>
           <Text>Wear comfortable shoes, bring water, take breaks.</Text>

        <Text>Privacy</Text>
          <Text>Your google account and password are encrypted in the database</Text>
          <Text>The tour information (waypoints, text descriptions, photographs)
          will be sent to Google and may be open-sourced for the research community
          </Text>
        <Text>Voluntary</Text>
          <Text>You participate this project voluntarily</Text>
          <Text>You are free to stop any time</Text>

         <TouchableOpacity
          style={{backgroundColor: 'blue'}}
           onPress={() => {
             Alert.alert('Agreement', 'By clicking confrimed, you have read and agreed to our terms',
             [ { text: 'OK',
               onPress:
               () => {
                 this.setState({openModal:false});
<<<<<<< HEAD
                 this.props.submitAgreement(this.props.session.sessionToken)
=======
                 this.props.submitAgreement(this.props.sessionToken.sessionToken);
>>>>>>> master
               }
               },
               { text: 'Cancel', onPress: () => {} }],
             { onDismiss: () => {} });
             }
           } >
           <Text>Confirmed</Text>
         </TouchableOpacity>
       </View>
     </View>
   </Modal>)
   : <View ></View>
  );}
}

  const mapStateToProps = state => ({
    session: state.session.user,
  });

  const mapDispatchToProps = dispatch => ({
    submitAgreement: (token) => submitAgreement(token, dispatch)
  });



export default connect(mapStateToProps, mapDispatchToProps)(agreementModal);
