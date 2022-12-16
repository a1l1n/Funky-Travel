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
    ORDER_POPULATION
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
                countryDetail: actions.payload
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
/*         case RESET_FILTER:
            return{
                ...state,
                continentFilter: null,
                activityFilter: null
            } */
        case FILTER_BY_CONTINENT:
            let allCtrs = state.countries;
            const continentsFilter = actions.payload === 'All' ? allCtrs 
            : allCtrs.filter(c => c.continent === actions.payload)
            console.log("Esto devuelve continentsFilter: ", continentsFilter)
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
        case ORDER_ALPHA_A_Z: 
        let sortedCountries = actions.payload === "asc" ?
        state.countries.sort(function(a,b){
            if (a.name > b.name) return 1;
            if (b.name > a.name) return -1;
            return 0;
        }) : state.countries.sort(function(a,b){
            if (a.name > b.name) return -1;
            if (b.name > a.name) return 1;
            return 0;
        })
        return{
            ...state,
            countries: sortedCountries
        }
        case ORDER_POPULATION:
            let sortedPopulation = actions.payload === "asc" ?
            state.countries.sort(function(a,b){
                if (a.population < b.population) return 1;
                if (b.population < a.population) return -1;
                return 0;
            }) : state.countries.sort(function(a,b){
                if (a.population < b.population) return -1;
                if (b.population < a.population) return 1;
                return 0;
            })
            return {
                ...state,
                countries: sortedPopulation
            }
        
        default: return state;
    }
}


