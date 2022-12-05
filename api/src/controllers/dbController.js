const axios = require('axios');
const { Country, Activity } = require('../db')


async function dataBase() { 
  try {                            
    {
      const allCountryApi = await axios.get(`https://restcountries.com/v3.1/all`);
      const modelCountries = allCountryApi.data.map((e) => {
        return {
          id: e.cca3,                  
          name: e.name.common,
          continent: e.continents,
          capital: e.capital, 
          subregion: e.subregion,
          area: e.area,
          population: e.population, 
          flagimg: e.flags.png,
        };
      });

      modelCountries.forEach(async (e) => {
        await Country.findOrCreate({
            where: {
              id: e.id,
              name: e.name
            },
            defaults: {
              continent: e.continent[0],
              capital: e.capital ? e.capital[0] : 'Capital not found',
              subregion: e.subregion,
              area: e.area,
              population: e.population,
              flagimg: e.flagimg
            }
        });
      });
    }
    console.log(' *** \ @_@ /*** ')
  } catch (error) {
    console.log(error);
  }
};
 
module.exports = {
    dataBase
} 