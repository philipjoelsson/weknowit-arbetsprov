import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const SearchCityScreen = () => {

  return (

    <View style={styles.container}>
      <Text style={styles.title}> SEARCH BY CITY </Text>
      <TextInput style={styles.input} placeholder="Enter a city" />
      <Pressable style={styles.button}>
        <Icon name='search1' size={40} color='black'/>
      </Pressable>
    </View>

  );
}

export default SearchCityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    position: 'absolute',
    top: 200,
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    color: 'black',
    borderWidth: 2,
    borderRadius: 4,
    width: 250,
    height: 50,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    height: 60,
    width: 60,
  }
})
