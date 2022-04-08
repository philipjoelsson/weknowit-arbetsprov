import { View, Text, Pressable, StyleSheet, TextInput, SafeAreaView, ActivityIndicator } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const SearchCountryScreen = (props) => {

  return (

    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Pressable style={styles.backBtn} onPress={()=>props.back()}>
          <Entypo name='arrow-left' size={40}/>
          <Text style={styles.headerText}> CityPop </Text>
        </Pressable>
      </SafeAreaView>
      <Text style={styles.title}> SEARCH BY COUNTRY </Text>
      {props.loading ? <View style={styles.loader}><ActivityIndicator size='large' color='black' /></View> : <View></View>}
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
    top: 40,
    borderWidth: 1,
    borderRadius: 4,
  },
  headerText: {
    fontSize: 20,
    letterSpacing: 1,
    fontWeight: '500',
  },
  loader: {
    position: 'absolute',
    justifyContent: 'center',
    top: 300,
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
