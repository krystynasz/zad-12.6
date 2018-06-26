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
       var liEl = document.createElement('li');
        liEl.innerText = item.name;
        countriesList.appendChild(liEl);
        var capital = document.createElement('li');
        capital.innerText = item.capital;
        countriesList.appendChild(capital);
        var population = document.createElement('li');
        population.innerText = item.population;
        countriesList.appendChild(population);
    });
}

