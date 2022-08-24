import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [entredGoalText, setEntredGoalTex] = useState('')
  const [coursGoals, setCourseGoals] = useState([])

  function goalInputHandler (entredText) {
    setEntredGoalTex(entredText)
  }
  function goalAddHandler () {
    setCourseGoals((currentCourseGoal) => [...coursGoals, entredGoalText])
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your goal' onChangeText={goalInputHandler}/>
        <Button title='Add goal'onPress={goalAddHandler}/>
      </View>
      <View style={styles.goalContainer}>
        {coursGoals.map((goal) => <Text style={styles.textItem } key={goal}>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1, 
    padding:50
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth:1,
    paddingBottom: 20,
    borderColor: "#ccc"
  },
  goalContainer: {
    marginTop:20
  },
  textInput: {
    width: '70%',
    borderWidth:1,
    borderColor:"#ccc",
    marginRight:8,

  }, 
  textItem: {
    fontSize:19,
    textAlign:'center',
    color:"white",
    backgroundColor: '#03fc2c',
    borderRadius: 8
  }
});
