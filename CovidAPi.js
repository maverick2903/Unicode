const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "630ceab4a3mshcfba19e4f804eefp1ef079jsn1726396e50ca",
    "X-RapidAPI-Host": "corona-virus-world-and-india-data.p.rapidapi.com",
  },
};

fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", options) //Fetching the Covid API
  .then((response) => response.json())
  .then((response) => countryData(response["countries_stat"])) //Only utilising countries stat
  .catch((err) => console.error(err));

function countryData(country_data) {
  console.log(country_data);
  let body = document.querySelector("tbody");
  //For selecting each country's full data
  for (const countryText of country_data) {
    let countryRow = document.createElement("tr");
    body.appendChild(countryRow);
    // For selecting individual data of each country
    for (const countryInfo in countryText) {
      if (countryInfo != "region") {
        let bodyElement = document.createElement("td");
        bodyElement.textContent = countryText[countryInfo];
        countryRow.appendChild(bodyElement);
        if (
          countryInfo == "cases" ||
          countryInfo == "deaths" ||
          countryInfo == "total_tests"
        ) {
          bodyElement.style.cssText = "padding-left:5px;padding-right:5px;";
        }
      }
    }
  }
}
