import {FlatList, StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
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
      <FlatList style={styles.goalContainer}
      
      data={coursGoals}
      renderItem={etim => <Text style={styles.textItem }>{etim.item}</Text>}
      keyExtractor={etim => console.log (etim)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1, 
    padding:45
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
    marginTop:20,
    fontSize:19,
    color:"white",
    backgroundColor: '#0daad1',
    borderRadius: 6,
    marginTop:20
  }
});
