const { Sequelize } = require('sequelize');
const { Country, Activity } = require('../db')

 async function newActivity(req, res){
    const { countryName, name, dificulty, duration, season, date } = req.body
    console.log("Activities / Esto entra por body: ", req.body)
    if(!name || !dificulty || !duration || !season  || !date  || !countryName) return res.status(404).send('Please, all fields must be completed')

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
        const response = await newAct.addCountry(countryList)
      return res.status(200).send('Activity created');
    } catch (error) {
        console.log("Saltó el catch del Post")
        res.send(error)
    }
}; 

async function getActivities(req, res){

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