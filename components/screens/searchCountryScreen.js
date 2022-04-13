import { View, Text, Pressable, StyleSheet, TextInput, SafeAreaView, ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import * as Haptics from 'expo-haptics';
import Ripple from 'react-native-material-ripple';

const SearchCountryScreen = (props) => {

  return (

    <KeyboardAvoidingView style={styles.container}
                          behavior={Platform.OS == "ios" ? "padding" : "height"}
                          enabled={Platform.OS === "ios" ? false : false}>
      <SafeAreaView style={[styles.header, Platform.OS === 'ios' ? {top: 50} : {top: 10}]}>
        <Ripple style={styles.backBtn}
                rippleColor='#F4E9DC'
                rippleDuration={1000}
                rippleOpacity={1}
                onPress={()=>props.back()}>
          <Entypo name='arrow-left' size={40} color='#F4E9DC'/>
          <Text style={styles.headerText}> CityPop </Text>
        </Ripple>
      </SafeAreaView>
      <Text style={styles.title}> SEARCH BY COUNTRY </Text>
      {props.loading ? <View style={styles.loader}><ActivityIndicator size='large' color='black' /></View> : <View></View>}
      <TextInput style={styles.input} value={props.search} placeholder="Enter a country" placeholderTextColor='#494949' textAlign='center' onChangeText={(txt)=>props.setSearch(txt)}/>
      <Pressable style={({ pressed }) => [{transform: pressed ? [{ scale: 0.8 }] : [{ scale: 1 }] }, styles.button]} onPress={()=> {props.onSearch('Choose'); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}}>
        <AntDesign name='search1' size={40} color='#494949'/>
      </Pressable>
    </KeyboardAvoidingView>

  );
}

export default SearchCountryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4E9DC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    position: 'absolute',
    textAlign: 'center',
    top: 200,
    fontSize: 40,
    fontWeight: 'bold',
    width: '80%',
    color: '#494949',
  },
  input: {
    backgroundColor: '#F4E9DC',
    color: '#494949',
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#E85E56',
    width: '80%',
    height: '8%',
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
    color: '#494949',
  },
  header: {
    position: 'absolute',
    left: 10,
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
    justifyContent: 'center',
    top: 300,
    color: '#494949',
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
