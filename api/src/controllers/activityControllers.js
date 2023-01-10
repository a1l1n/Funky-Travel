const { Sequelize } = require('sequelize');
const { Country, Activity } = require('../db')

 async function newActivity(req, res){
    const { countryName, name, dificulty, duration, season, date } = req.body

    if(!name || !dificulty || !duration || !season  || !date  || !countryName) return res.status(404).send('Please, all fields must be completed')
    // Chequear si es válido el param Country
    const countryList= await Country.findOne({
        where:{
            name: countryName
        }
    });
    
    if (!countryList) return res.status(404).send("Not a valid country");

    try {
        const newAct = await Activity.create({
           name: name, 
           dificulty: dificulty,
           duration: duration,
           season: season,
           date: date 
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
};

// http://localhost:3001/activities?id=:id ---------------------
async function deleteActivity(req, res){
    const { id } = req.query;
    try {
        await Activity.destroy({
            where: {
                id: id
            }
        })
        res.status(200).send("Activity successfully deleted")
    } catch (error) {
        console.log("Dumbass");
        res.status(404).send(error);
    }
};

//Update -------------------------------------------------
async function editActivity(req, res){
    const { id } = req.query
    const { countryName, name, dificulty, duration, season, date } = req.body;

    // En caso de que se modifique el país
    if(countryName){
        const country= await Country.findOne({
            where:{
                name: countryName
            }
        });
        if (!country) return res.status(404).send("Not a valid country");
    }
    try {
        Activity.update({
            name: name, 
            dificulty: dificulty,
            duration: duration,
            season: season,
            date
        }, 
        { where: {
            id: id
        }})
        res.status(200).send("Successfull update")
    } catch (error) {
        console.log("Malió sal el update")
        res.status(400).send(error)
    }
}

module.exports = {
    newActivity,
    getActivities,
    deleteActivity,
    editActivity
}   

