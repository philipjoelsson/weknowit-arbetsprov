import { View, Text, Pressable, StyleSheet, SafeAreaView } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const ChooseScreen = (props) => {

  return (

    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Pressable style={styles.backBtn} onPress={()=>props.back()}>
          <Entypo name='arrow-left' size={40}/>
          <Text style={styles.headerText}> CityPop </Text>
        </Pressable>
      </SafeAreaView>
      <Text style={styles.title}> {props.country} </Text>
      <Pressable style={styles.button} onPress={()=>props.onChoose('Result', props.cities[0])}>
        <Text style={styles.text}> {props.cities[0].name} </Text>
      </Pressable>
      <Pressable style={styles.button} onPress={()=>props.onChoose('Result', props.cities[1])}>
        <Text style={styles.text}> {props.cities[1].name} </Text>
      </Pressable>
      <Pressable style={styles.button} onPress={()=>props.onChoose('Result', props.cities[2])}>
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
    textTransform: 'uppercase',
    textAlign: 'center',
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
  header: {
    position: 'absolute',
    left: 10,
    top: 40,
    borderWidth: 1,
    borderRadius: 4,
  },
  headerText: {
    fontSize: 20,
    letterSpacing: 1,
    fontWeight: '500',
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
