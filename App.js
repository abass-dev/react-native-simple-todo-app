import {
  FlatList,
  StyleSheet,
  View,
} from "react-native";
import React, { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

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
      <GoalInput button={goalAddHandler} input={goalInputHandler} />
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
  }
});
