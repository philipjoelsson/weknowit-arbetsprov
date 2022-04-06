import ChooseScreen from './../screens/chooseScreen.js';

const ChoosePresenter = ({ navigation }) => {

  const ChangeScreen = (toScreen) => {
    navigation.navigate(toScreen)
  }

  return <ChooseScreen onChoose={(toScreen)=>ChangeScreen(toScreen)}/>
}

export default ChoosePresenter;
