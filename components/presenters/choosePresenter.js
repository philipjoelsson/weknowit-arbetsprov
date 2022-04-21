import ChooseScreen from './../screens/chooseScreen.js';
import GetDataFromApi from './../geonamesApi.js';
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const ChoosePresenter = ({ route, navigation }) => {

  const { cities, search } = route.params; // Get parameters from earlier screen

  // Function for changing screen, navigating to the new screen and also passing on correct parameters
  const ChangeScreen = (toScreen, city) => {
    setTimeout(() => {
      navigation.navigate(toScreen, {
        name: city.name,
        population: city.population,
      })
    }, 300); // Adding a delay for the animation to show
  }

  // Returning ChooseScreen with the parameters and functions used
  return <ChooseScreen onChoose={(toScreen, city)=>ChangeScreen(toScreen, city)}
                          cities={cities}
                          country={cities[0].countryName}
                          back={()=>setTimeout(()=>{navigation.goBack()},200)}/>
}

export default ChoosePresenter;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
