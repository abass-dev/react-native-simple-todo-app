import { View, StyleSheet, Button, TextInput } from "react-native";

function GoalInput(props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your goal"
        onChangeText={props.input}
      />
      <Button title="Add goal" onPress={props.button} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderColor: "#ccc",
  },
  textInput: {
    width: "70%",
    borderWidth: 1,
    borderColor: "#ccc",
  },
});
