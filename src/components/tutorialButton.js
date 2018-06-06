import React from 'react';
import {
View,
StyleSheet,
TouchableOpacity,
Modal,
Text,
Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const INSTRUCTIONS = [
' 5 landmarks will be given. Choose one as your starting position and walk towards it.',
'On the way to the next step, submit at least 2 descriptions and photos but no more than 10 for the path.',
'Upon successful completion of the path, resources will be given to build robots.'
];

const DESCRIPTIONS_EXAMPLES = [
  [" When you reach the other side of the street, turn right and keep walking for about a block-and-a-half. You'll cross Webster Street.",
  ' Pass Jamba Juice and Specialties. Pass Lee’s Deli. Tokyo Express on the left.'
  ],
  [' Walk five blocks and turn left on Sansome when you see the CVS.',
  ' Walk 18 feet across the river. OR Walk 134 blocks up Market Street.'
  ]
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
           Alert.alert(
             "", "Exit insturction?", [
             {
               text: "OK",
               onPress: () => {this.setModalVisible(false);}
             },
             {
               text: "Cancel",
               onPress: () => {this.setModalVisible(true);}
             }
           ], {
             onDismiss: () => {}
           });
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
             <View >
              <Text style={[styles.exampleContainer]}>
              <Text style={{color:'#C1727D',fontWeight: 'bold'}}>Valid </Text>
               Description should be
              <Text style={{color: 'black'}}> coherent & plausible</Text>
              </Text>

              {DESCRIPTIONS_EXAMPLES.map(examples =>
                <View key={Math.random()}>
                  <Text style={styles.exampleContainer}>
                    <Icon name="check" size={20} color="#32C8A6"/>
                    {examples[0]}
                  </Text>
                  <Text style={styles.exampleContainer}>
                  <Icon name="times" size={20} color="#C1727D"/>
                  {examples[1]}
                  </Text>
                </View>
              )}
             </View>
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
    marginTop: '2%',
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
    height: '10%',
    width: '100%',
    bottom: '0%',
    backgroundColor: '#72BAAC',
    padding: 5
  },
  closeButton: {
    backgroundColor:'#72BAAC',
    borderRadius: 10,
  },
  instruction: {
    // height: '18%',
    width: '100%',
    paddingHorizontal:15,
    paddingVertical: 10,
    backgroundColor:'#F8F6E7',
    fontSize: 19,
    fontWeight: '500',
    color: '#83837A',
    borderBottomWidth: 2,
    borderColor:'#DDDBCC'

  },
  exampleContainer:{
    width: '100%',
    paddingHorizontal:15,
    paddingVertical: 5,
    color: '#83837A',
    backgroundColor:'#F8F6E7',
    fontSize: 19,
    fontWeight: '700',
  }

});

export default TutorialButton;
