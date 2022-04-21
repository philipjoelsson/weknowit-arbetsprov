// Function for API
const GetDataFromApi={
  apiCall(params){return fetch("http://api.geonames.org/searchJSON?username=weknowit&orderby=population&" + params)

        .then((response) => {
          if (response.status !== 200) { // Throwing error if the response from api is not 200
            throw response.statusText
          }
          else {
            // If response is fine, return response
            return response
          }
        })
        .then((response) => response.json()) // Turn response into JSON
      }
  ,
  // Function for searching for city, taking a city as parameter
  searchCity(city){return GetDataFromApi.apiCall("name_equals=" + encodeURI(city) + "&maxRows=1&featureClass=P&featureCode=PPLA&featureCode=PPLA2&featureCode=PPLA3&featureCode=PPLA4&featureCode=PPLA5&featureCode=PPLC")}
  ,
  // Function for searching for country, taking country as parameter
  searchCountry(country){return GetDataFromApi.apiCall("name=" + encodeURI(country) + "&maxRows=1&featureClass=A&featureCode=PCLI")}
  ,
  // Function for searching for cities, taking countrycode as parameter
  searchCities(code){return GetDataFromApi.apiCall("country=" + encodeURI(code) + "&maxRows=3&featureClass=P")}
}


export default GetDataFromApi;
