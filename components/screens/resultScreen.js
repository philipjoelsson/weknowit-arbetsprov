import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ripple from 'react-native-material-ripple';

const ResultScreen = (props) => {

  return (

    <View style={styles.container}>
      // Depending on platform we want different margin on top
      <SafeAreaView style={[styles.header, Platform.OS === 'ios' ? {top: 50} : {top: 10}]}>
        <Ripple style={styles.backBtn} // Ripple creates a ripple-effect when pressed
                rippleColor='#F4E9DC'
                rippleDuration={1000}
                rippleOpacity={1}
                onPress={()=>props.back()}> // When pressed, we want to go back
          <Entypo name='arrow-left' size={40} color='#F4E9DC'/> // Icon imported, an arrow to the left
          <Text style={styles.headerText}> CityPop </Text>
        </Ripple>
      </SafeAreaView>
      <Text style={styles.title}> {props.name} </Text>
      <View style={styles.box}>
        <Text style={styles.pop}> Population </Text>
        <Text style={styles.number}> {props.population.toLocaleString()} </Text> // toLocaleString should group numbers by three
      </View>
    </View>

  )
}

export default ResultScreen;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4E9DC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    position: 'absolute',
    top: 200,
    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#494949',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#494949',
    width: '80%',
    height: '18%',
  },
  pop: {
    position: 'absolute',
    top: 10,
  },
  number: {
    fontSize: 35,
  },
  header: {
    position: 'absolute',
    left: 10,
    top: 50,
    borderRadius: 4,
    backgroundColor: '#E85E56',
  },
  headerText: {
    fontSize: 20,
    letterSpacing: 1,
    fontWeight: '500',
    color: '#F4E9DC',
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
