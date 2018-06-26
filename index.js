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
        liEl.innerHTML = '<td class="country-name" colspan="2">'+ item.name+ '</td>';
        countriesList.appendChild(liEl);
        var capital = document.createElement('tr');
        capital.innerHTML = "<td>Capital: </td><td>"+ item.capital+ "</td>";
        countriesList.appendChild(capital);
        var population = document.createElement('tr');
        population.innerHTML = "<td>Population: </td><td>"+ item.population+ " people</td>";;
        countriesList.appendChild(population);
        var nativeName = document.createElement('tr');
        nativeName.innerHTML = "<td>Native name: </td><td>"+ item.nativeName + "</td>";;
        countriesList.appendChild(nativeName);
        var frenchName = document.createElement('tr');
        frenchName.innerHTML = "<td>Name in French: </td><td>"+ item.translations.fr + "</td>";;
        countriesList.appendChild(frenchName);
    });
}

