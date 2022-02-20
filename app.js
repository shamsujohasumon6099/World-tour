fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => displayCountries(data));



const displayCountries = countries => {
    var countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';
        const countryInfo = `
            <h3 class='country-name'>${country.name.common}</h3>
            <p>${country.capital}</p>
            <button onclick="displayCountryDetaul('${country.name.common}')">Details</button>
        `
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);

    });

}

const displayCountryDetaul = name => {

    fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(response => response.json())
        .then(data => renderCountryInfo(data[0]));

}

const renderCountryInfo = country => {
    const countryDetail = document.getElementById('countryDetail');
    countryDetail.innerHTML = `
        <h1>Country: ${country.name.common}</h1>
        <h3>Capital: ${country.capital}</h3>
        <p>Area: ${country.area}</p>
        <p>Population: ${country.population}</p>
        <img src="${country.flags.svg}">
    `
    console.log(country);
}