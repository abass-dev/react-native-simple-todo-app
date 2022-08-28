import { useState } from "react";
import { View, StyleSheet, Button, TextInput, Modal, Image } from "react-native";

function GoalInput(props) {
  const [entredGoalText, setEntredGoalTex] = useState("");

  function goalInputHandler(entredText) {
    setEntredGoalTex(entredText);
  }
  function addGoalHandler() {
    props.onAddGoal(entredGoalText);
    setEntredGoalTex("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
          style={styles.textInput}
          placeholder="Your goal"
          onChangeText={goalInputHandler}
          value={entredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add goal" onPress={addGoalHandler} />
          </View>
          <View  style={styles.button}>
            <Button color='#f31282' title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    padding:16,
    backgroundColor: "#5e0acc"
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    color: "#120438",
    backgroundColor: "#e4d0ff",
    padding:8,
    borderRadius:6
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop:10
  },
  button: {
    width: "30%",
    marginHorizontal: 8
  },
  image: {
    width:100,
    height:100,
    margin:20
  }
});
