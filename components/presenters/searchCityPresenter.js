import SearchCityScreen from './../screens/searchCityScreen.js';

const SearchCityPresenter = ({ navigation }) => {

  const ChangeScreen = (toScreen) => {
    navigation.navigate(toScreen);
  }

  return <SearchCityScreen onSearch={(toScreen)=>ChangeScreen(toScreen)}/>
}

export default SearchCityPresenter;
