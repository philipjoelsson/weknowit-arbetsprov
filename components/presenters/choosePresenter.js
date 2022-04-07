import ChooseScreen from './../screens/chooseScreen.js';
import GetDataFromApi from './../geonamesApi.js';
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const ChoosePresenter = ({ route, navigation }) => {

  const { cities, search } = route.params;


  const ChangeScreen = (toScreen, city) => {
    navigation.navigate(toScreen, {
      name: city.name,
      population: city.population,
    })
  }

  return <ChooseScreen onChoose={(toScreen, city)=>ChangeScreen(toScreen, city)}
                          cities={cities}
                          country={search}
                          back={()=>navigation.goBack()}/>
}

export default ChoosePresenter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
