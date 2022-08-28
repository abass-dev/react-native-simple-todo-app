import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.textItem}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin:8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  textItem: {
    fontSize: 19,
    padding: 8,
    color: "white",
  },
});

export default GoalItem;
