import { View, Text, Pressable, StyleSheet } from 'react-native';
import Ripple from 'react-native-material-ripple';

const HomeScreen = (props) => {

  return (

    <View style={styles.container}>
      <Text style={styles.title}> CityPop </Text>
      {/* Button for searching by city */}
      {/* Ripple creates a ripple-effect when pressed */}
      <Ripple style={styles.button}
              rippleColor='#F4E9DC'
              rippleDuration={1000}
              rippleOpacity={1}
              onPress={()=>props.onPress('SearchCity')}>
        <Text style={styles.text}> SEARCH BY CITY </Text>
      </Ripple>
      {/* Button for searching by country */}
      <Ripple style={styles.button}
              rippleColor='#F4E9DC'
              rippleDuration={1000}
              rippleOpacity={1}
              onPress={()=>props.onPress('SearchCountry')}>
        <Text style={styles.text}> SEARCH BY COUNTRY </Text>
      </Ripple>
    </View>

  )
}

export default HomeScreen;

{/* Styles */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4E9DC',
  },
  title: {
    position: 'absolute',
    top: 200,
    fontSize: 60,
    fontWeight: 'bold',
    color: '#494949',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#E85E56',
    width: '80%',
    height: '8%',
    margin: 5,
  },
  text: {
    color: '#F4E9DC',
    fontWeight: 'bold',
    fontSize: 15,
  },
})
