import { Button, FlatList, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [coursGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler () {
    setModalIsVisible(false)
  }

  function goalAddHandler(entredGoalText) {
    setCourseGoals((currentCourseGOals) => [
      ...coursGoals,
      { text: entredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler()
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGOals) => {
      return currentCourseGOals.filter((goal) => goal.id !== id);
    });
  }
  return (
    <>
    <StatusBar style="light" />
    <View style={styles.appContainer}>
      <Button title="Add New Goal" onPress={startAddGoalHandler} />
      {modalIsVisible && <GoalInput visible={modalIsVisible} onAddGoal={goalAddHandler} onCancel={endAddGoalHandler}/>}
      <View>
        <FlatList
          data={coursGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                id={itemData.item.id}
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 45,
    paddingHorizontal: 16

  },
});
