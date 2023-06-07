import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState(' ');

  function inputtedGoal(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoal() {
    props.addingGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputStyle}>
        <Image style={styles.image} source={require('../assets/images/images1.png')} />
        <TextInput
          style={styles.textStyle}
          input="Set a task!"
          placeholder="Add a task!"
          onChangeText={inputtedGoal}
          value={enteredGoalText} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}><Button title="Add Task" color="#96C0CE" onPress={addGoal} /></View>
          <View style={styles.button}><Button title="Cancel" color="#C25B56" onPress={props.onCancel} /></View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    backgroundColor: "#525564",
  },
  textStyle: {
    borderColor: "#cccccc",
    padding: 10,
    borderWidth: 1,
    width: "80%",
    marginRight: 8,
    backgroundColor: "#d2d2d2",
  },
  buttonContainer: {
    flexDirection: "row-reverse",
    margin: 10,
  },
  button: {
    marginHorizontal: 8,
    width: "30%",
  },
  image: {
    height: 300,
    width: 300,
    margin: 8,
  },
});

export default GoalInput;