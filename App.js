import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible,setModalIsVisible]=useState(false);
  const [courseGoals,setCourseGoals]=useState([]);

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function endAddGoalHandler(){
    setModalIsVisible(false);
  }

  function addGoal(enteredGoalText){
    setCourseGoals((currentCourseGoals) => 
    [...currentCourseGoals, {text : enteredGoalText, id: Math.random().toString()}, ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    });
  }

  return (
    <>
    <StatusBar style="light" />
    <View style={styles.container}>
      <View style={styles.spaceabove}>
      <Button title="Add new task" color="#96C0CE" onPress={startAddGoalHandler} />
      </View>
      <GoalInput visible={modalIsVisible} addingGoal={addGoal} onCancel={endAddGoalHandler} />
      <View style={styles.goalContainer}>
      <FlatList 
        data={courseGoals}
        renderItem={(itemData) => {
          return <GoalItem 
          text={itemData.item.text} 
          onDeleteItem={deleteGoalHandler}
          id={itemData.item.id} />;
        }}
        keyExtractor={(item,index) => {return item.id;}}
        alwaysBounceVertical={false}
      />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:50,
    paddingHorizontal:16,
    backgroundColor: "#525564",
  },
  goalContainer:{
    flex:7,
    paddingTop:10,
  },
  spaceabove:{
    marginTop:15,
  },
  
});
