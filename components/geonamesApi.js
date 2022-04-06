const GetCityFromApi = (city) => {
  return fetch("http://api.geonames.org/searchJSON?name=" + city + "&maxRows=10&username=weknowit")
            .then((response) => response.json())
}

const GetCountryFromApi = (country) => {
  return fetch("http://api.geonames.org/searchJSON?q=" + country + "&maxRows=10&username=weknowit")
            .then((response) => response.json())
            .then((data) => {
              return fetch("http://api.geonames.org/searchJSON?country=" + data.geonames[0].countryCode + "&maxRows=10&username=weknowit")
            })
            .then((response) => response.json())
}


export { GetCityFromApi, GetCountryFromApi };
