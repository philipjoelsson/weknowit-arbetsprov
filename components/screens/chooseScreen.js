import { View, Text, Pressable, StyleSheet } from 'react-native';

const ChooseScreen = (props) => {

  return (

    <View style={styles.container}>
      <Text style={styles.title}> FRANCE </Text>
      <Pressable style={styles.button} onPress={()=>props.onChoose('Result')}>
        <Text style={styles.text}> Paris </Text>
      </Pressable>
      <Pressable style={styles.button} onPress={()=>props.onChoose('Result')}>
        <Text style={styles.text}> Marsielle </Text>
      </Pressable>
      <Pressable style={styles.button} onPress={()=>props.onChoose('Result')}>
        <Text style={styles.text}> Lyon </Text>
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
