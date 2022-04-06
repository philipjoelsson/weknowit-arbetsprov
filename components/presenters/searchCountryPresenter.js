import SearchCountryScreen from './../screens/searchCountryScreen.js';

const SearchCountryPresenter = ({ navigation }) => {

  const ChangeScreen = (toScreen) => {
    navigation.navigate(toScreen)
  }

  return <SearchCountryScreen onSearch={(toScreen)=>ChangeScreen(toScreen)}/>
}

export default SearchCountryPresenter;
