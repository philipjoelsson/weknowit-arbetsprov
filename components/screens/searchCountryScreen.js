import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const SearchCountryScreen = (props) => {

  return (

    <View style={styles.container}>
      <Text style={styles.title}> SEARCH BY COUNTRY </Text>
      <TextInput style={styles.input} placeholder="Enter a country" textAlign='center'/>
      <Pressable style={styles.button} onPress={()=>props.onSearch('Choose')}>
        <Icon name='search1' size={40} color='black'/>
      </Pressable>
    </View>

  );
}

export default SearchCountryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    position: 'absolute',
    textAlign: 'center',
    top: 200,
    fontSize: 30,
    fontWeight: 'bold',
    width: '80%',
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
