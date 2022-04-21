import SearchCityScreen from './../screens/searchCityScreen.js';
import GetDataFromApi from './../geonamesApi.js';
import React from 'react';
import { ActivityIndicator, View, StyleSheet, Alert } from 'react-native';

const SearchCityPresenter = ({ navigation }) => {

  const [search, setSearch] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const ChangeScreen = (toScreen) => {
    if (search.length > 0) {
      if ((/[A-Za-z]/).test(search)) {

        setIsLoading(true);
        GetDataFromApi.searchCity(search)
          .then((data) => {
            setIsLoading(false);
            navigation.navigate(toScreen, {
              name: data.geonames[0].name,
              population: data.geonames[0].population,
            })
           })
          .catch((error) => {
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

  return <SearchCityScreen onSearch={(toScreen)=>ChangeScreen(toScreen)}
                           setSearch={(txt)=>setSearch(txt)}
                           search={search}
                           back={()=>setTimeout(()=>{navigation.goBack()},200)}
                           loading={isLoading}/>
}

export default SearchCityPresenter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
