import { ActivityIndicator, View, StyleSheet } from 'react-native';
import ResultScreen from './../screens/resultScreen.js';
import GetDataFromApi from './../geonamesApi.js';
import React from 'react';

const ResultPresenter = ({ route, navigation }) => {

  const [isLoading, setIsLoading] = React.useState(true);
  const [name, setName] = React.useState();
  const [population, setPopulation] = React.useState();

  React.useEffect(() => {
    GetDataFromApi.searchCity(route.params.search)
      .then((data) => {
        setName(data.geonames[0].name);
        setPopulation(data.geonames[0].population);
      })
      .catch((error) => {
        alert('Could not find City');
       })
      .finally(() => setIsLoading(false))
  }, [])

  return isLoading ? (
            <View style={styles.container}>
              <ActivityIndicator size='large' color='black'/>
            </View>
          ) : (
            <ResultScreen population={population}
                          name={name}/>
          )
}

export default ResultPresenter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
