import { View, Text, Pressable, StyleSheet } from 'react-native';
import Ripple from 'react-native-material-ripple';

const HomeScreen = (props) => {

  return (

    <View style={styles.container}>
      <Text style={styles.title}> CityPop </Text>
      <Ripple style={styles.button}
              rippleColor='#fff'
              rippleDuration={1000}
              rippleOpacity={1}
              onPress={()=>props.onPress('SearchCity')}>
        <Text style={styles.text}> SEARCH BY CITY </Text>
      </Ripple>
      <Ripple style={styles.button}
              rippleColor='#fff'
              rippleDuration={1000}
              rippleOpacity={1}
              onPress={()=>props.onPress('SearchCountry')}>
        <Text style={styles.text}> SEARCH BY COUNTRY </Text>
      </Ripple>
    </View>

  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    position: 'absolute',
    top: 200,
    fontSize: 40,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    width: 250,
    height: 50,
    margin: 5,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
})
