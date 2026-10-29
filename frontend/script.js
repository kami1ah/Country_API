
const searchForm = document.querySelector('#search-form')
// const allCountriesbtn = document.querySelector('.btn')


searchForm.addEventListener('submit', findCountry)
// allCountriesbtn = document.querySelector('click', allCountries)

function findCountry(e) {
    e.preventDefault();
    extractCountry(e.target.countries.value)

        if (country) {
        extractCountry(country);
    }

    e.target.countries.value = '';
}

async function extractCountry(country) {
    try {

        const respData = await fetch(`https://country-api-02ai.onrender.com/countries/${country}`, {method: "GET"});

        if (respData.ok) {
            const data = await respData.json();
            addCountry(data);
        } else {
            throw "Something has gone wrong with one of the API requests";
        }
    } catch (e) {
        console.log(e);
    }
}
