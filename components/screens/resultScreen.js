import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const ResultScreen = (props) => {

  return (

    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Pressable onPress={()=>props.back()}>
          <Entypo name='arrow-left' size={40}/>
        </Pressable>
        <Text style={styles.headerText}> CityPop </Text>
      </SafeAreaView>
      <Text style={styles.title}> {props.name} </Text>
      <View style={styles.box}>
        <Text style={styles.pop}> Population </Text>
        <Text style={styles.number}> {props.population.toLocaleString()} </Text>
      </View>
    </View>

  )
}

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    position: 'absolute',
    top: 200,
    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 4,
    width: 300,
    height: 125,
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
    top: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    letterSpacing: 1,
    fontWeight: '500',
  },
})
