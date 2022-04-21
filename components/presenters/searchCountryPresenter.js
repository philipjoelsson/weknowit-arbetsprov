import SearchCountryScreen from './../screens/searchCountryScreen.js';
import GetDataFromApi from './../geonamesApi.js';
import React from 'react';
import { ActivityIndicator, View, StyleSheet, Alert } from 'react-native';

const SearchCountryPresenter = ({ navigation }) => {

  {/* Defining states */}
  const [search, setSearch] = React.useState(''); {/* Const storing the current search */}
  const [isLoading, setIsLoading] = React.useState(false); {/* Const storing if page is loading */}
  const [cities, setCities] = React.useState(''); {/* Consting storing the largest cities in the country */}

  {/* Function for changing screen, navigating to the new screen and also passing on correct parameters */}
  const ChangeScreen = (toScreen) => {
    {/* Making sure the user have typed in anything */}
    if (search.length > 0) {
      {/* Making sure only letters have been used in search */}
      if ((/[A-Za-z]/).test(search)) {
        setIsLoading(true);
        {/* Calling API and search for country */}
        GetDataFromApi.searchCountry(search)
          // When data from countrysearch is retrieved, calling api again searching for cities
          .then((data) => {return GetDataFromApi.searchCities(data.geonames[0].countryCode)})
          .then((data) => {
            setIsLoading(false);
            {/* When data is retrieved, navigate to new screen with parameters from data */}
            navigation.navigate(toScreen, {
              cities: data.geonames,
              search: search,
            })
          })
          .catch((error) => {
            {/* Catching error, alerting the user country could not be found */}
            setIsLoading(false);
            Alert.alert('Could not find country');
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

  {/* Returning ChooseScreen with the parameters and functions used, delay on goBack for animation */}
  return <SearchCountryScreen onSearch={(toScreen)=>ChangeScreen(toScreen)}
                              setSearch={(txt)=>setSearch(txt)}
                              search={search}
                              back={()=>setTimeout(()=>{navigation.goBack()},200)}
                              loading={isLoading}/>
}

export default SearchCountryPresenter;

{/* Styles */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
