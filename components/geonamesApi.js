const GetDataFromApi={
  apiCall(params){return fetch("http://api.geonames.org/searchJSON?username=weknowit&orderby=population&" + params)

        .then((response) => {
          if (response.status !== 200) {
            throw response.statusText
          }
          else {
            return response
          }
        })
        .then((response) => response.json())
      }
  ,
  searchCity(city){return GetDataFromApi.apiCall("name_equals=" + encodeURI(city) + "&maxRows=10&featureClass=P&featureCode=PPLA&featureCode=PPLA2&featureCode=PPLA3&featureCode=PPLA4&featureCode=PPLA5&featureCode=PPLC")}
  ,
  searchCountry(country){return GetDataFromApi.apiCall("name=" + encodeURI(country) + "&maxRows=1&featureClass=A&featureCode=PCLI")}
  ,
  searchCities(code){return GetDataFromApi.apiCall("country=" + encodeURI(code) + "&maxRows=3&featureClass=P")}
}


export default GetDataFromApi;
