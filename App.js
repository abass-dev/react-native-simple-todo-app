import {
  FlatList,
  StyleSheet,
  View,
  Button,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [entredGoalText, setEntredGoalTex] = useState("");
  const [coursGoals, setCourseGoals] = useState([]);

  function goalInputHandler(entredText) {
    setEntredGoalTex(entredText);
  }
  function goalAddHandler() {
    setCourseGoals((currentCourseGOals) => [
      ...coursGoals,
      { text: entredGoalText, key: Math.random().toString() },
    ]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add goal" onPress={goalAddHandler} />
      </View>
      <View style={styles.goalContainer}>
        <FlatList
          data={coursGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 45,
  },
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
    marginRight: 8,
  },
});
