import React from 'react';
import {
View,
StyleSheet,
TouchableOpacity,
Modal,
Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
      <View style={{marginTop: 22}}>
       <Modal
         animationType="slide"
         transparent={false}
         visible={this.state.modalVisible}
         onRequestClose={() => {
           alert('Modal has been closed.');
         }}>
         <View style={{marginTop: 22}}>
           <View>
             <Text>Hello World!</Text>
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
  bottomBand: {
    height: '17%',
    width: '100%',
    bottom: 0,
    backgroundColor: '#72BAAC',
    padding: 5
  },
  closeButton: {
    backgroundColor:'#72BAAC'
  }
});

export default TutorialButton;
