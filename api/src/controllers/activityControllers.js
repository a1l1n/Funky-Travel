const { Sequelize } = require('sequelize');
const { Country, Activity } = require('../db')

 async function newActivity(req, res){
/* 
Llega info por body -> 
1° filtro para el Input -> 
Chequear si en la db Activity se encuentra una entrada igual ? Crear una actividad : no modificar ->
Buscar el país ingresado por body -> puede ser por lista
Agrega el país seleccionado en una lista -> se deben agregar ->
Crear la nueva actividad

  */
    const { countryName, name, dificulty, duration, season, date } = req.body
    console.log("Activities / Esto entra por body: ", req.body)
    if(!name || !dificulty || !duration || !season || !date || !countryName) return res.status(404).send('Please, all fields must be completed')
    try {
        const newAct = await Activity.findOrCreate({
           where: { name: name},
           defaults: {
           dificulty: dificulty,
           duration: duration,
           season: season,
           date: date
           }
        });
        const countryList= await Country.findAll({
            where:{
                id: countryName
            }
        });
        console.log("País guardado: ", countryList)
        const response = await newAct.addCountry(countryList)
        console.log("Response: ", response);
      return res.status(200).send('Activity created');
    } catch (error) {
        res.send(error)
    }
}; 

async function getActivities(req,res){
    try {
        let activities = await Activity.findAll({attributes: ["name", "id"]});
        console.log('Actividades guardadas: ', activities)
        if(activities.length){
          return res.status(200).send(activities)
        } else {
          return res.send('No activities yet!')
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    newActivity,
    getActivities
}   