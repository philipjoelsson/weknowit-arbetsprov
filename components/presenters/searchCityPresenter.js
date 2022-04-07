import SearchCityScreen from './../screens/searchCityScreen.js';
import GetDataFromApi from './../geonamesApi.js';
import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const SearchCityPresenter = ({ navigation }) => {

  const [search, setSearch] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const ChangeScreen = (toScreen) => {
    if (search.length > 0) {
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
          alert('Could not find city');
         })
    }
    else {
      alert('Please enter something before search')
    }
  }

  return <SearchCityScreen onSearch={(toScreen)=>ChangeScreen(toScreen)}
                            setSearch={(txt)=>setSearch(txt)}
                            search={search}
                            back={()=>navigation.goBack()}
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
