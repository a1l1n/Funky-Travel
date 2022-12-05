
const { Country, Activity } = require('../db')

async function con(){
return await Country.findAll();  
};

// http://localhost:3001/countries?name=pais ---------------------------------------------------------------------------
async function getAllCountries(req, res){
    const { name } = req.query;     
 try {
    const info = await con()
    // NO FUNCIONA EL QUERY TODAVÍA
    if (name) {
        const cntr = info.filter(c => c.name.toLowerCase().includes(name.toLowerCase()));
        if(!cntr.lenght){
            console.log('Llega hasta acá?')
            return res.status(200).json(cntr)
        } else {
    // ESTO SÍ FUNCIONA
            res.status(404).send('Countries not found');
        }
    } else {
    // ESTO TAMBIÉN FUNCIONA
        console.log('o llega hasta acá?')
        return res.status(200).json(info);
    }
} catch (error) {
    console.log(error);
} 
}; 

// http://localhost:3001/countries/:id ------------------------------------------------------------------------------
async function getCid(req, res){
    const { idC } = req.params        
    try {
        const cntr = await Country.findOne({
            where: {id: idC.toUpperCase()},
            include: Activity
        });
      if (cntr) return res.status(200).json(cntr);
      return res.status(404).json('Country not found, please try again')
    } catch (error) {
        console.log(error)
    }
}; 


module.exports = {
getAllCountries,
getCid
};
