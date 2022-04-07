import SearchCountryScreen from './../screens/searchCountryScreen.js';
import GetDataFromApi from './../geonamesApi.js';
import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const SearchCountryPresenter = ({ navigation }) => {

  const [search, setSearch] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [cities, setCities] = React.useState('');

  const ChangeScreen = (toScreen) => {
    if (search.length > 0) {
      setIsLoading(true);
      GetDataFromApi.searchCountry(search)
        .then((data) => {return GetDataFromApi.searchCities(data.geonames[0].countryCode)})
        .then((data) => {
          setIsLoading(false);
          navigation.navigate(toScreen, {
            cities: data.geonames,
            search: search,
          })
        })
        .catch((error) => {
          setIsLoading(false);
          alert('Could not find country');
        })
    }
    else {
      alert('Please enter something before search')
    }
  }

  return <SearchCountryScreen onSearch={(toScreen)=>ChangeScreen(toScreen)}
                               setSearch={(txt)=>setSearch(txt)}
                               search={search}
                               back={()=>navigation.goBack()}
                               loading={isLoading}/>
}

export default SearchCountryPresenter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
