import ChooseScreen from './../screens/chooseScreen.js';
import { GetCountryFromApi } from './../geonamesApi.js';
import React from 'react';
import { ActivityIndicator } from 'react-native';

const ChoosePresenter = ({ route, navigation }) => {

  const [isLoading, setIsLoading] = React.useState(true);
  const [cities, setCities] = React.useState([]);


  const ChangeScreen = (toScreen, city) => {
    navigation.navigate(toScreen, {
      search: city,
    })
  }

  React.useEffect(()=>{

    GetCountryFromApi(route.params.search)
      .then((data) => setCities(data.geonames.slice(0,3)))
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setIsLoading(false))

  }, [])

  return isLoading ? <ActivityIndicator /> : <ChooseScreen onChoose={(toScreen, city)=>ChangeScreen(toScreen, city)}
                                                           cities={cities}
                                                           country={route.params.search}/>
}

export default ChoosePresenter;
