import axios from 'axios';
import {
    GET_ALL_COUNTRIES,
    GET_COUNTRY_NAME,
    GET_COUNTRY_ID,
    CREATE_NEW_ACTIVITY,
    GET_ACTIVITY,   
    RESET_FILTER,
    FILTER_BY_CONTINENT,
    FILTER_BY_ACTIVITY,
    RESET_ORDERS,
    ORDER_POPULATION_ASC,
    ORDER_POPULATION_DESC,
    ORDER_ALPHA_ASC,
    ORDER_ALPHA_DESC
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
            console.log(response)
            return dispatch({
                type: GET_COUNTRY_NAME,
                payload: response.data
            })
        } catch (error) {
            console.log(error)
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

// GET Y POST DE ACTIVITIES -----------------------------------------------------    FALTA CHEQUEAR SI FUNCIONA
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
            return dispatch({
                type: GET_ACTIVITY,
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    }
};


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


export function filterByActivity(payload){
    return{
        type:FILTER_BY_ACTIVITY,
        payload
    }
}

// ÓRDENES -> RESET, POPUL ASC, POPUL DESC, ALPH ASC, ALPH DESC ------------------



/* RESET_ORDERS,
    ORDER_POPULATION_ASC,
    ORDER_POPULATION_DESC,
    ORDER_ALPHA_ASC,
    ORDER_ALPHA_DESC */ 