import { View, Text, StyleSheet } from 'react-native';

const ResultScreen = () => {

  return (

    <View style={styles.container}>
      <Text style={styles.title}> PARIS </Text>
      <View style={styles.box}>
        <Text style={styles.pop}> Population </Text>
        <Text style={styles.number}> 2 224 000 </Text>
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
