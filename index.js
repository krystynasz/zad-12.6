var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');

function showCountriesList(resp) {
    countriesList.innerHTML = '';
}

var searchCountries = function() {
    var countryName = document.getElementById('country-name').value;

    if(!countryName.length) {
        countryName = "Poland";
        fetch(url + countryName)
        .then(function(resp) {
            return resp.json();
        })
        .then(showCountriesList);
    }
}

document.getElementById('search').addEventListener("click", searchCountries);