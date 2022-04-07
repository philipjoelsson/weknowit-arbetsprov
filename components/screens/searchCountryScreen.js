import { View, Text, Pressable, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const SearchCountryScreen = (props) => {

  return (

    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Pressable onPress={()=>props.back()}>
          <Entypo name='arrow-left' size={40}/>
        </Pressable>
        <Text style={styles.headerText}> CityPop </Text>
      </SafeAreaView>
      <Text style={styles.title}> SEARCH BY COUNTRY </Text>
      <TextInput style={styles.input} value={props.search} placeholder="Enter a country" textAlign='center' onChangeText={(txt)=>props.setSearch(txt)}/>
      <Pressable style={styles.button} onPress={()=>props.onSearch('Choose')}>
        <AntDesign name='search1' size={40} color='black'/>
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
