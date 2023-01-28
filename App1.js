import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as tf from '@tensorflow/tfjs';
// import {loadGraphModel} from '@tensorflow/tfjs-converter';
import { useEffect, useState } from 'react';
import { bundleResourceIO } from '@tensorflow/tfjs-react-native';
// import * as tf from '@tensorflow/tfjs-node';

export default function App() {
  const [model, setModel] = useState();

  // async function loadModel() {
  //   try {
  //   // For layered model

  //   // const model = await tf.loadLayersModel(url.model);
  //   // For graph model
  //   // const model = await tf.loadGraphModel(url.model);
  //   const modelJson = require('./assets/model/model.json');
  //   const modelWeights = require('./assets/model/group1-shard1of1.bin');
  //   const model1 = await tf.loadGraphModel(bundleResourceIO(modelJson, modelWeights));

  //   setModel(model1);
  //   console.log("Load model success")
  //   }
  //   catch (err) {
  //   console.log(err);
  //   }
  //   }
    //React Hook
  
  // useEffect(()=>{
  // tf.ready().then(()=>{
  // loadModel()
  // });
  // },[])


  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
});
