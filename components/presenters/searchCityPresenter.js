import SearchCityScreen from './../screens/searchCityScreen.js';
import React from 'react';

const SearchCityPresenter = ({ navigation }) => {

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

  return <SearchCityScreen onSearch={(toScreen)=>ChangeScreen(toScreen)}
                           setSearch={(txt)=>setSearch(txt)}
                           search={search}/>
}

export default SearchCityPresenter;
