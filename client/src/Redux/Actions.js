import axios from 'axios';
import {
    GET_ALL_COUNTRIES,
    GET_COUNTRY_NAME,
    GET_COUNTRY_ID,
    GET_ACTIVITY,   
    RESET_FILTER,
    FILTER_BY_CONTINENT,
    RESET_ORDERS,
    ORDER_POPULATION,
    ORDER_ALPHA_A_Z,
    UPDATE_ACTIVITY,
    DELETE_ACTIVITY,
    ACT_FILTER_SEASON,
    ACT_ORDER_A_Z,
    ACT_ORDER_DIFICULTY,
    ACT_ORDER_DATE,
    ACT_COUNT_ORDER_A_Z,
    ACT_ORDER_DIFFICULTY
} from './Constants';

// GET EN COUNTRIES : ALL, DETAIL, ID -------------------------------------------
export function getAllCountries(){
    return async function (dispatch){
        try {
            const response = await axios.get('http://localhost:3001/countries')
            //console.log(response.data)
            return dispatch ({
                type: GET_ALL_COUNTRIES,
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
};

export function getCountryByName(name){
    return async function(dispatch){
        try {
            const response = await axios.get(`http://localhost:3001/countries?name=${name}`);
            return dispatch({
                type: GET_COUNTRY_NAME,
                payload: response.data
            })
        } catch (error) {
            console.log("Error en Redux/Actions", error)
        }
    }
};

export function getCountryId(id){
    return async function (dispatch){
        try {
            const response = await axios.get(`http://localhost:3001/countries/${id}`);
            return dispatch({
                type: GET_COUNTRY_ID,
                payload: response.data
            })
        } catch (error) {
            console.log(error)    
        }
    }
};

// GET, POST, UPDATE y DELETE DE ACTIVITIES -----------------------------------------------------    FALTA CHEQUEAR SI FUNCIONA
export function createNewActivity(payload){
    return async function (dispatch){
        try {
            console.log('Me trae la info así:' + payload);
            const newActivity = await axios.post('http://localhost:3001/activities', payload);
            console.log('Nueva actividad: ', newActivity)
            return newActivity;
        } catch (error) {
            console.log(error);
        }
    }
};

export function getActivity(){
    return async function (dispatch){
        try {
            const response = await axios.get('http://localhost:3001/activities');
            console.log("Esto trae getActivities / response: ", response)
            return dispatch({
                type: GET_ACTIVITY,
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    }
};

export function updateActivity(id, payload) {
    return async function (dispatch) {
        try {
            const updateData = await axios.put(`http://localhost:3001/activities?id=${id}`, payload);
            return dispatch({
                type: UPDATE_ACTIVITY,
                payload: updateData.data
            })
        } catch (error) {
            console.log("Se chingó el update", error);
        }
    }
};

export function deleteActivity(id) {
    return async function(dispatch) {
        try {
            await axios.delete(`http://localhost:3001/activities?id=${id}`)
            return dispatch({
                type: DELETE_ACTIVITY
            })
        } catch (error) {
            console.log("Se chingó el delete ", error);
        }
    }
}

// FILTERS -> RESET, CONTINENT, ACTIVITY --------------------------------------

export function resetFilter(){
    return{
        type: RESET_FILTER
    }
};

export function filterByContinent(payload){
    return{
        type: FILTER_BY_CONTINENT,
        payload
    }
};

// COUNTRIES: ÓRDENES -> RESET, POPULATION, ALPHABETICAL --------------------------

export function sortByName(payload) {
    console.log("ESto es payload en sortByName: ", payload);
    return {
        type: ORDER_ALPHA_A_Z,
        payload
    }
};

export function sortByPopulation(payload) {
    console.log("Esto es payload en sortedByPopulation: ", payload)
    return {
        type: ORDER_POPULATION,
        payload
    }
};

// ACTIVITIES: FILTERS -> BY SEASON -----------------------------------------------
export function activitiesBySeason(payload) {
    return {
        type: ACT_FILTER_SEASON,
        payload
    }
}

// ACTIVITIES: ÓRDENES -> ALPHABETICAL, DIFFICULTY, DATE --------------------------
export function activitySortByName(payload) {
    return {
        type: ACT_ORDER_A_Z,
        payload
    }
};

export function countriesSortByName(payload) {
    return {
        type: ACT_COUNT_ORDER_A_Z,
        payload
    }
}

export function activitySortDifficulty(payload) {
    return {
        type: ACT_ORDER_DIFFICULTY, 
        payload
    }
};

export function activitySortDate(payload) {
    return {
        type: ACT_ORDER_DATE, 
        payload
    }
};



