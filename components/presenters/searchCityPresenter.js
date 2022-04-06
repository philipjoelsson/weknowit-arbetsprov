import SearchCityScreen from './../screens/searchCityScreen.js';
import React from 'react';

const SearchCityPresenter = ({ navigation }) => {

  const [search, setSearch] = React.useState('');

  const ChangeScreen = (toScreen) => {
    navigation.navigate(toScreen, {
      search: search,
    });
  }

  return <SearchCityScreen onSearch={(toScreen)=>ChangeScreen(toScreen)}
                           setSearch={(txt)=>setSearch(txt)}
                           search={search}/>
}

export default SearchCityPresenter;
