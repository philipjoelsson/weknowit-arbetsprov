import { ActivityIndicator } from 'react-native';
import ResultScreen from './../screens/resultScreen.js';
import { GetCityFromApi } from './../geonamesApi.js';
import React from 'react';

const ResultPresenter = ({ route }) => {

  const [isLoading, setIsLoading] = React.useState(true);
  const [name, setName] = React.useState();
  const [population, setPopulation] = React.useState();

  React.useEffect(() => {
    GetCityFromApi(route.params.search)
      .then((data) => {
        setName(data.geonames[0].name);
        setPopulation(data.geonames[0].population);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setIsLoading(false))
  }, [])

  return isLoading ? <ActivityIndicator /> : <ResultScreen population={population}
                                                           name={name}/>
}

export default ResultPresenter;
