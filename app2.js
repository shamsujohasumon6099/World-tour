fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => displayCountries(data));


const displayCountries = countries => {
    var countriesDiv = document.getElementById('countries');
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';
        const countryInfo = `
            <h3 class='country-name'>${country.name.common}</h3>
            <h5>${country.capital}</h5>
            <button onclick="displayCountryDetaul('${country.name.common}')" type="button" class="btn btn-warning">Details</button>
        `
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    }
}



const displayCountryDetaul = name => {
    // const countryDetail = document.getElementById('countryDetail');
    // const 
    // console.log(name);
    fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(response => response.json())
        .then(data => renderCountryInfo(data[0]));
}


const renderCountryInfo = country => {
    const countryDetail = document.getElementById('countryDetail');
    countryDetail.innerHTML = `
    <div class="country-details">
        <div class="card mb-3 ">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${country.flags.svg}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h1>Country: ${country.name.common}</h1>
                        <h3>Capital: ${country.capital}</h3>
                        <p>Area: ${country.area}</p>
                        <p>Population: ${country.population}</p>
                    </div>
                </div>
            </div>
        </div>
    <div>
    `
}

