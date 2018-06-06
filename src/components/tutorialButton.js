import React from 'react';
import {
View,
StyleSheet,
TouchableOpacity,
Modal,
Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const INSTRUCTIONS = [
'You will be given 5 landmarks based on your current location. Choose one as your starting position and walk towards it.',
'Once you are at starting position, you will be able to choose your next step.',
'On your way to the next step, submit at least 2 descriptions and photos but no more than 10 for the path.',
'Upon successful completion of the path, you will be rewarded some resources which can be used to build robots.'
];
class TutorialButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render(){
    return(
      <View >
       <Modal
         animationType="slide"
         transparent={false}
         visible={this.state.modalVisible}
         onRequestClose={() => {
           alert('Modal has been closed.');
         }}>
         <View style={styles.topBand}>
          <Text style={styles.instructionTitle}>Instructions</Text>
         </View>
         <View>

             {INSTRUCTIONS.map(instruction =>
               <Text
               style={styles.instruction}
               key={Math.random()}>
               {instruction}
               </Text>
             )}
             <View style={styles.bottomBand}>

             <TouchableOpacity
              style = {styles.closeButton}
               onPress={() => {
                 this.setModalVisible(!this.state.modalVisible);
               }}>
               <Icon name="window-close" size={50} color="white"/>
             </TouchableOpacity>

             </View>

           </View>

       </Modal>

        <TouchableOpacity
          style={styles.tutorialButton}
          onPress={() => {
              this.setModalVisible(true);
            }}>
          <Icon name="question-circle" size={30} color="#32C8A6"/>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  tutorialButton: {
    position: 'absolute',
    top: '2%',
    left: '5%',
    width: 40,
    height: 40,
  },
  topBand: {
    // height: '17%',
    width: '100%',
    backgroundColor: '#72BAAC',
  },
  instructionTitle: {
    fontSize:30,
    fontWeight:'700',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  bottomBand: {
    position: 'relative',
    height: '17%',
    width: '100%',
    bottom: '2%',
    backgroundColor: '#72BAAC',
    padding: 5
  },
  closeButton: {
    backgroundColor:'#72BAAC',
    borderWidth: 10,
    borderRadius: 10,
  },
  instruction: {
    // height: '18%',
    width: '100%',
    padding:5,
    backgroundColor:'#F8F6E7',
    fontSize: 20,
    fontWeight: '700',
    borderBottomWidth: 2,
    borderColor:'#EFCA6F'

  }

});

export default TutorialButton;
