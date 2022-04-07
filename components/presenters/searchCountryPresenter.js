import SearchCountryScreen from './../screens/searchCountryScreen.js';
import React from 'react';

const SearchCountryPresenter = ({ navigation }) => {

  const [search, setSearch] = React.useState('');

  const ChangeScreen = (toScreen) => {
    if (search.length > 0) {
      navigation.navigate(toScreen, {
        search: search,
      });
    }
    else {
      alert('Please enter something before search')
    }
  }

  return <SearchCountryScreen onSearch={(toScreen)=>ChangeScreen(toScreen)}
                              setSearch={(txt)=>setSearch(txt)}
                              search={search}
                              back={()=>navigation.goBack()}/>
}

export default SearchCountryPresenter;
