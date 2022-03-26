import React,{useState} from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Box from './components/Box'

export default function App() {

  const [boxes,setBoxes] = useState(Array(9).fill(null))
  const [isXChance,setIsXChance] = useState(true)
  const [winner, setWinner] = useState(null)

  function PlayBox(no){
    return (
      <Box
        no ={no}
        boxInfo={{boxes,setBoxes}}
        chance = {{isXChance, setIsXChance}}
        winner={winner}
      />
    )
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="green" />
      <View style={styles.playBoard}>
        <View style={styles.rows}>
        {PlayBox(0)}
        {PlayBox(1)}
        {PlayBox(2)}
        </View>
        <View style={styles.rows}>
        {PlayBox(3)}
        {PlayBox(4)}
        {PlayBox(5)}
        </View>
        <View style={styles.rows}>
        {PlayBox(6)}
        {PlayBox(7)}
        {PlayBox(8)}
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playBoard:{
    borderWidth:10,
    borderRadius:10,
    borderColor:'green'
  },
  rows: {
    flexDirection:'row'
  }
});
