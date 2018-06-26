var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');

var searchCountries = function() {
    var countryName = document.getElementById('country-name').value;

    if(!countryName.length)  countryName = "Poland";
    fetch(url + countryName)
        .then(function(resp) {
            return resp.json();
        })
        .then(showCountriesList);
}

document.getElementById('search').addEventListener("click", searchCountries);

function showCountriesList(resp) {
    countriesList.innerHTML = '';
    resp.forEach(function(item) {
       var liEl = document.createElement('tr');
        liEl.innerHTML = <td>Name of the country</td><td> item.name</td>;
        countriesList.appendChild(liEl);
        var capital = document.createElement('tr');
        capital.innerText = "Capital: " + item.capital;
        countriesList.appendChild(capital);
        var population = document.createElement('tr');
        population.innerText = "Population: " + item.population;
        countriesList.appendChild(population);
    });
}

