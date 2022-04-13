import { View, Text, Pressable, StyleSheet, TextInput, SafeAreaView, ActivityIndicator } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import * as Haptics from 'expo-haptics';
import Ripple from 'react-native-material-ripple';

const SearchCityScreen = (props) => {

  return (

    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Ripple style={styles.backBtn}
                rippleColor='#F4E9DC'
                rippleDuration={1000}
                rippleOpacity={1}
                onPress={()=>props.back()}>
          <Entypo name='arrow-left' color='#F4E9DC' size={40}/>
          <Text style={styles.headerText}> CityPop </Text>
        </Ripple>
      </SafeAreaView>
      <Text style={styles.title}> SEARCH BY CITY </Text>
      {props.loading ? <View style={styles.loader}><ActivityIndicator size='large' color='#494949'/></View> : <View></View>}
      <TextInput style={styles.input} value={props.search} placeholder="Enter a city" placeholderTextColor='#494949' textAlign='center' onChangeText={(txt)=>props.setSearch(txt)}/>
      <Pressable style={({ pressed }) => [{transform: pressed ? [{ scale: 0.8 }] : [{ scale: 1 }] }, styles.button]} onPress={()=> {props.onSearch('Result'); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}}>
        <AntDesign name='search1' size={40} color='black'/>
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
    backgroundColor: '#F4E9DC',
  },
  title: {
    position: 'absolute',
    top: 200,
    fontSize: 40,
    width: '80%',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#494949',
  },
  input: {
    backgroundColor: '#F4E9DC',
    borderWidth: 2,
    borderColor: '#E85E56',
    borderRadius: 4,
    width: '80%',
    height: '8%',
    padding: 10,
    marginBottom: 10,
    color: '#494949',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    height: 60,
    width: 60,
    color: '#494949',
  },
  header: {
    position: 'absolute',
    left: 10,
    top: 50,
    borderRadius: 4,
    backgroundColor: '#E85E56',
  },
  headerText: {
    fontSize: 20,
    letterSpacing: 1,
    fontWeight: '500',
    color: '#F4E9DC',
  },
  loader: {
    position: 'absolute',
    top: 300,
    justifyContent: 'center',
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
