import { View, Text, Pressable, StyleSheet, SafeAreaView } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ripple from 'react-native-material-ripple';

const ChooseScreen = (props) => {

  return (

    <View style={styles.container}>
      {/* Depending on platform we want different margin on top */}
      <SafeAreaView style={[styles.header, Platform.OS === 'ios' ? {top: 50} : {top: 10}]}>
        <Ripple style={styles.backBtn}
                rippleColor='#F4E9DC'
                rippleDuration={1000}
                rippleOpacity={1}
                onPress={()=>props.back()}>{/* When pressed, go back */}
          <Entypo name='arrow-left' size={40} color='#F4E9DC'/>
          <Text style={styles.headerText}> CityPop </Text>
        </Ripple>
      </SafeAreaView>
      <Text style={styles.title}> {props.country} </Text>
      {/* Ripple creates a ripple-effect when pressed */}
      {/* When pressed call function props.onChoose and pass on screen which screen to navigate to and the city */}
      <Ripple style={styles.button}
              rippleColor='#F4E9DC'
              rippleDuration={1000}
              rippleOpacity={1}
              onPress={()=>props.onChoose('Result', props.cities[0])}>
        <Text style={styles.text}> {props.cities[0].name} </Text>{/* Largest city */}
      </Ripple>
      {/* When pressed call function props.onChoose and pass on screen which screen to navigate to and the city */}
      <Ripple style={styles.button}
              rippleColor='#F4E9DC'
              rippleDuration={1000}
              rippleOpacity={1}
              onPress={()=>props.onChoose('Result', props.cities[1])}>
        <Text style={styles.text}> {props.cities[1].name} </Text>{/* Second largest city */}
      </Ripple>
      {/* When pressed call function props.onChoose and pass on screen which screen to navigate to and the city */}
      <Ripple style={styles.button}
              rippleColor='#F4E9DC'
              rippleDuration={1000}
              rippleOpacity={1}
              onPress={()=>props.onChoose('Result', props.cities[2])}>
        <Text style={styles.text}> {props.cities[2].name} </Text>{/* Thirs largest city */}
      </Ripple>
    </View>

  )
}

export default ChooseScreen;

{/* Styles */}
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
    fontSize: 15,
    color: '#F4E9DC',
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
