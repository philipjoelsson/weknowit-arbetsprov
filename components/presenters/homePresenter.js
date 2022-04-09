import HomeScreen from './../screens/homeScreen.js';

const HomePresenter = ({ navigation }) => {

  const ChangeScreen = (toScreen) => {
    setTimeout(()=> {
      navigation.navigate(toScreen)},
      300);
  }

  return <HomeScreen onPress={(toScreen)=>ChangeScreen(toScreen)}/>
}

export default HomePresenter;
