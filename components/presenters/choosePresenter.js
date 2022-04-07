import ChooseScreen from './../screens/chooseScreen.js';
import GetDataFromApi from './../geonamesApi.js';
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const ChoosePresenter = ({ route, navigation }) => {

  const [isLoading, setIsLoading] = React.useState(true);
  const [cities, setCities] = React.useState([]);


  const ChangeScreen = (toScreen, city) => {
    navigation.navigate(toScreen, {
      search: city,
    })
  }

  React.useEffect(()=>{
    GetDataFromApi.searchCountry(route.params.search)
      .then((data) => {return GetDataFromApi.searchCities(data.geonames[0].countryCode)})
      .then((data) => {setCities(data.geonames); console.log(data.geonames);})
      .catch((error) => {
        alert('Could not find country');
      })
      .finally(() => setIsLoading(false))

  }, [])

  return isLoading ? (
            <View style={styles.container}>
              <ActivityIndicator size='large' color='black'/>
            </View>
          ) : (
            <ChooseScreen onChoose={(toScreen, city)=>ChangeScreen(toScreen, city)}
                          cities={cities}
                          country={route.params.search}/>
          )
}

export default ChoosePresenter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
