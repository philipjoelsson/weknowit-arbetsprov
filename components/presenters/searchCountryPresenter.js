import SearchCountryScreen from './../screens/searchCountryScreen.js';
import React from 'react';

const SearchCountryPresenter = ({ navigation }) => {

  const [search, setSearch] = React.useState('');

  const ChangeScreen = (toScreen) => {
    navigation.navigate(toScreen, {
      search: search,
    })
  }

  return <SearchCountryScreen onSearch={(toScreen)=>ChangeScreen(toScreen)}
                              setSearch={(txt)=>setSearch(txt)}
                              search={search}/>
}

export default SearchCountryPresenter;
