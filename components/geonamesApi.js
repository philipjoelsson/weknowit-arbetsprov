const GetCityFromApi = (city) => {
  return fetch("http://api.geonames.org/searchJSON?name=" + city + "&maxRows=10&username=weknowit")
            .then((response) => response.json())
}

const GetCountryFromApi = (country) => {
  return fetch("http://api.geonames.org/searchJSON?country=" + country + "&orderby=population&maxRows=10&username=weknowit")
            .then((response) => response.json())
}

export { GetCityFromApi, GetCountryFromApi };
