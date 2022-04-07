import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePresenter from './components/presenters/homePresenter.js';
import SearchCityPresenter from './components/presenters/searchCityPresenter.js';
import SearchCountryPresenter from './components/presenters/searchCountryPresenter.js';
import ChoosePresenter from './components/presenters/choosePresenter.js';
import ResultPresenter from './components/presenters/resultPresenter';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePresenter} options={{headerShown: false}}/>
        <Stack.Screen name="SearchCity" component={SearchCityPresenter} options={{headerShown: false}}/>
        <Stack.Screen name="SearchCountry" component={SearchCountryPresenter} options={{headerShown: false}}/>
        <Stack.Screen name="Choose" component={ChoosePresenter} options={{headerShown: false}}/>
        <Stack.Screen name="Result" component={ResultPresenter} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}
