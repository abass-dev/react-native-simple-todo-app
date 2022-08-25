import React from "react";
import { Text, View, StyleSheet } from "react-native";

function GoalItem(props) {
   
  return (
    <View>
     <Text style={styles.textItem}>{props.text}</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  goalContainer: {
    marginTop: 20,
  },
  textItem: {
    marginTop: 20,
    fontSize: 19,
    color: "white",
    backgroundColor: "#0daad1",
    borderRadius: 6,
    marginTop: 20,
  },
});

export default GoalItem;
