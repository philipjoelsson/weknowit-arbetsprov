import SearchCityScreen from './../screens/searchCityScreen.js';
import GetDataFromApi from './../geonamesApi.js';
import React from 'react';
import { ActivityIndicator, View, StyleSheet, Alert } from 'react-native';

const SearchCityPresenter = ({ navigation }) => {

  // Defining states
  const [search, setSearch] = React.useState(''); // Const storing the current search
  const [isLoading, setIsLoading] = React.useState(false); // Const storing if page is loading

  // Function for changing screen, navigating to the new screen and also passing on correct parameters
  const ChangeScreen = (toScreen) => {
    if (search.length > 0) { // Making sure the user have typed in anything
      if ((/[A-Za-z]/).test(search)) { // Making sure only letters have been used in search
        setIsLoading(true);
        // Calling API and search for city
        GetDataFromApi.searchCity(search)
          .then((data) => {
            setIsLoading(false);
            // When data is retrieved, navigate to new screen with parameters from data
            navigation.navigate(toScreen, {
              name: data.geonames[0].name,
              population: data.geonames[0].population,
            })
           })
          .catch((error) => { // Catching error, alerting the user city could not be found
            setIsLoading(false);
            Alert.alert('Could not find city');
           })
      }
      else {
        Alert.alert('Please only enter letters');
      }
    }
    else {
      Alert.alert('Please enter something before search');
    }
  }

  // Returning ChooseScreen with the parameters and functions used
  return <SearchCityScreen onSearch={(toScreen)=>ChangeScreen(toScreen)}
                           setSearch={(txt)=>setSearch(txt)} // Function setting the search
                           search={search}
                           back={()=>setTimeout(()=>{navigation.goBack()},200)} // Delay for animation
                           loading={isLoading}/>
}

export default SearchCityPresenter;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
