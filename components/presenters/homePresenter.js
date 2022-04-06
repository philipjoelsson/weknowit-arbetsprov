import HomeScreen from './../screens/homeScreen.js';

const HomePresenter = ({ navigation }) => {

  const ChangeScreen = (toScreen) => {
    navigation.navigate(toScreen);
  }

  return <HomeScreen onPress={(toScreen)=>ChangeScreen(toScreen)}/>
}

export default HomePresenter;
