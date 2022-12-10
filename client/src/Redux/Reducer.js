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
    ORDER_ALPHA_A_Z,
    ORDER_POPULATION_ASC,
    ORDER_POPULATION_DESC,
} from './Constants';


const initialState = {
    countries: [],
    countriesActivities: [],
    countryDetail: {},
    filteredCountries: [],
    activities: []
}

export default function reducer(state = initialState, actions){
    switch(actions.type){
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: actions.payload
            };
        case GET_COUNTRY_NAME:
            return{
                ...state,
                countries: actions.payload
                };
        case GET_COUNTRY_ID:
            return{
                ...state,
                countries: actions.payload
            };
        //---------------------------------------------------------------------
        case  CREATE_NEW_ACTIVITY:
            return{
                ...state
            };
        case  GET_ACTIVITY:
            return{
                ...state,
                activities: actions.payload
            };
        //---------------------------------------------------------------------    
        case RESET_FILTER:
            return{
                ...state,
                continentFilter: null,
                activityFilter: null
            }
        case FILTER_BY_CONTINENT:
            let allCtrs = state.countries;
            const continentsFilter = actions.payload === 'All' ? allCtrs 
            : allCtrs.filter(c => c.continent === actions.payload)
            return{
                ...state,
                countries: continentsFilter
            }
        case FILTER_BY_ACTIVITY:
            const allAct = state.countries;
            const activitiesFilter = actions.payload === 'All' ?
            allAct: allAct.filter(c => c.activities &&c.activities.map(e => e.name).includes(actions.payload))
            return{
                ...state,
                countriesActivities: activitiesFilter
            }
        
        default: return state;
    }
}


