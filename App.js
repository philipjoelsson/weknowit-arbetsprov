import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePresenter from './components/presenters/homePresenter.js';
import SearchCityPresenter from './components/presenters/searchCityPresenter.js';
import SearchCountryPresenter from './components/presenters/searchCountryPresenter.js';
import ChoosePresenter from './components/presenters/choosePresenter.js';
import ResultPresenter from './components/presenters/resultPresenter';

export default function App() {
  return (
    <View style={styles.container}>
      <ResultPresenter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
