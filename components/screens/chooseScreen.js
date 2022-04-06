import { View, Text, Pressable, StyleSheet } from 'react-native';

const ChooseScreen = (props) => {

  return (

    <View style={styles.container}>
      <Text style={styles.title}> {props.country} </Text>
      <Pressable style={styles.button} onPress={()=>props.onChoose('Result', props.cities[0].name)}>
        <Text style={styles.text}> {props.cities[0].name} </Text>
      </Pressable>
      <Pressable style={styles.button} onPress={()=>props.onChoose('Result', props.cities[1].name)}>
        <Text style={styles.text}> {props.cities[1].name} </Text>
      </Pressable>
      <Pressable style={styles.button} onPress={()=>props.onChoose('Result', props.cities[2].name)}>
        <Text style={styles.text}> {props.cities[2].name} </Text>
      </Pressable>
    </View>

  )
}

export default ChooseScreen;

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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    borderWidth: 2,
    elevation: 3,
    backgroundColor: '#fff',
    width: 250,
    height: 50,
    margin: 5,
  },
  text: {
    fontSize: 15,
  },
})
