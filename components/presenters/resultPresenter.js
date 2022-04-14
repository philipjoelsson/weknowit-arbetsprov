import { ActivityIndicator, View, StyleSheet } from 'react-native';
import ResultScreen from './../screens/resultScreen.js';
import GetDataFromApi from './../geonamesApi.js';
import React from 'react';

const ResultPresenter = ({ route, navigation }) => {

  const { name, population } = route.params;

  return <ResultScreen population={population}
                       name={name}
                       back={()=>setTimeout(()=>{navigation.goBack()},200)}/>
}

export default ResultPresenter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
