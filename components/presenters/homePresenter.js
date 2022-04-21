import HomeScreen from './../screens/homeScreen.js';

const HomePresenter = ({ navigation }) => {

  {/* Function for changing screen, navigating to the new screen 'toScreen' */}
  const ChangeScreen = (toScreen) => {
    setTimeout(()=> {
      navigation.navigate(toScreen)},
      300); {/* Adding a delay for the animation to show */}
  }

  {/* Returning HomeScreen */}
  return <HomeScreen onPress={(toScreen)=>ChangeScreen(toScreen)}/>
}

export default HomePresenter;
