import { View, Text, StyleSheet } from 'react-native';

const ResultScreen = (props) => {

  return (

    <View style={styles.container}>
      <Text style={styles.title}> {props.name} </Text>
      <View style={styles.box}>
        <Text style={styles.pop}> Population </Text>
        <Text style={styles.number}> {props.population} </Text>
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
  }
})
