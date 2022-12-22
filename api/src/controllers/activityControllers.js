const { Sequelize } = require('sequelize');
const { Country, Activity } = require('../db')

 async function newActivity(req, res){
    const { countryName, name, dificulty, duration, season, date } = req.body
    console.log("Activities / Esto entra por body: ", req.body)
    if(!name || !dificulty || !duration || !season  || !date  || !countryName) return res.status(404).send('Please, all fields must be completed')
    /* 
    1 -> separar horas de minutos -> "1"-":"-"30" -> split = "1", "30"
    2 -> parsear ambos elementos -> parseInt
    3 -> aplicar la lógica para transformar todo a minutos
    4 -> asignar el resultado a la propiedad duration
    */
    try {
        const newAct = await Activity.create({
           name: name, 
           dificulty: dificulty,
           duration: duration,
           season: season,
           date: date 
        });
        const countryList= await Country.findAll({
            where:{
                name: countryName
            }
        });
        console.log("Cambios en la linea 16, de find a findAll")
        const response = await newAct.addCountry(countryList)
      return res.status(200).send('Activity created');
    } catch (error) {
        res.send(error)
    }
}; 

async function getActivities(req,res){
    try {
        let activities = await Activity.findAll({
            include: Country  
            });
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