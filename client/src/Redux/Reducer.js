import {
    FILTER_BY_ACTIVITY,
    GET_ALL_COUNTRIES,
    GET_COUNTRY_NAME,
    GET_COUNTRY_ID,
    CREATE_NEW_ACTIVITY,
    GET_ACTIVITY,   
    FILTER_BY_CONTINENT,
    ORDER_ALPHA_A_Z,
    ORDER_POPULATION,
    UPDATE_ACTIVITY, 
    DELETE_ACTIVITY,
    ACT_FILTER_SEASON,
    ACT_ORDER_A_Z,
    ACT_COUNT_ORDER_A_Z,
    ACT_ORDER_DIFFICULTY,
    ACT_ORDER_DATE,
    RESET_FILTER,
    RESET_ORDERS,
} from './Constants';


const initialState = {
    countries: [],
    countryDetail: {},
    filteredCountries: [],
    activities: [],
    filteredActivities: [],
    countriesActivities: [],
}

// COUNTRIES ACTIONS ----------------------------------------------------------------
export default function reducer(state = initialState, actions){
    switch(actions.type){
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: [...actions.payload]
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

// COUNTRIES FILTERS ----------------------------------------------------------------
        case FILTER_BY_CONTINENT:
            let allCtrs = state.countries;
            const continentsFilter = actions.payload === 'All' ? allCtrs 
            : allCtrs.filter(c => c.continent === actions.payload)
            console.log("Esto devuelve continentsFilter: ", continentsFilter)
            return{
                ...state,
                filteredCountries: continentsFilter
            };

//COUNTRIES ORDERS ------------------------------------------------------------------
        case ORDER_ALPHA_A_Z: 
        let sortedCountries = actions.payload === "asc" ?
        state.filteredCountries.sort(function(a,b){
            if (a.id > b.id) return 1;
            if (b.id > a.id) return -1;
            return 0;
        }) : state.filteredCountries.sort(function(a,b){
            if (a.id > b.id) return -1;
            if (b.id > a.id) return 1;
            return 0;
        })
        return{
            ...state,
            filteredCountries: [...sortedCountries]
        };
        case ORDER_POPULATION:
            let sortedPopulation = actions.payload === "asc" ?
            state.filteredCountries.sort(function(a,b){
                if (a.population < b.population) return 1;
                if (b.population < a.population) return -1;
                return 0;
            }) : state.filteredCountries.sort(function(a,b){
                if (a.population < b.population) return -1;
                if (b.population < a.population) return 1;
                return 0;
            })
            return {
                ...state,
                filteredCountries: [...sortedPopulation]
            };
//ACTIVITIES ACTIONS ---------------------------------------------------------------------
        case  CREATE_NEW_ACTIVITY:
            return{
                ...state
            };
        case  GET_ACTIVITY:
            return{
                ...state,
                activities: actions.payload
            };
        case UPDATE_ACTIVITY:
            return {
                ...state
            };
        case DELETE_ACTIVITY:
            let activities = state.activities
            return {
                ...state,
                activities: [...activities]
            };

// ACTIVITIES FILTERS ---------------------------------------------------------
        case ACT_FILTER_SEASON:
            let allAct = state.activities;
            const actFilter = actions.payload === 'All' ? allAct 
            : allAct.filter(c => c.season === actions.payload)
            return{
                ...state,
                filteredActivities: actFilter
            };
// ACTIVITIES ORDERS ----------------------------------------------------------
        case ACT_ORDER_A_Z:
            let filtered = state.activities;
            let sortedActivities = actions.payload === "asc" ?
            filtered.sort(function(a,b){
                if (a.name > b.name) return 1;
                if(b.name > a.name) return -1;
                return 0;
            }) : state.activities.sort(function(a,b){
                if (a.name > b.name) return -1;
                if (b.name > a.name) return 1;
                return 0;
            })
        return {
            ...state,
            filteredActivities: [...sortedActivities]  
        };

        case ACT_COUNT_ORDER_A_Z: 
        let filteredAct = state.activities;
        let countriesActivities = actions.payload === "asc" ?
        filteredAct.sort(function(a,b) {
            if (a.countries[0].name > b.countries[0].name) return 1;
            if (b.countries[0].name > a.countries[0].name) return -1;
            return 0;
        }) : filteredAct.sort(function(a, b){
            if (a.countries[0].name > b.countries[0].name) return -1;
            if (b.countries[0].name > a.countries[0].name) return 1;
            return 0;
        });
        return {
            ...state,
            filteredActivities: [...countriesActivities]
        }
        case ACT_ORDER_DIFFICULTY:
        let difficulty = state.activities;
        let sortedDifficulty = actions.payload === "asc" ?
        difficulty.sort(function(a,b) {
            if (a.dificulty > b.dificulty) return 1;
            if (b.dificulty > a.dificulty) return -1;
            return 0;
        }) : difficulty.sort(function(a,b) {
            if (a.dificulty > b.dificulty) return -1;
            if (b.dificulty > a.dificulty) return 1;
            return 0;
        })
        return {
            ...state,
            filteredActivities: [...sortedDifficulty]
        };
        case ACT_ORDER_DATE:
        let dates = state.activities;
        let sortedDates = actions.payload === "asc" ?
        dates.sort(function(a,b) {
            if (a.date > b.date) return 1;
            if (b.date > a.date) return -1;
            return 0;
        }) : dates.sort(function(a,b) {
            if (a.date > b.date) return -1;
            if (b.date > a.date) return 1;
            return 0;
        })
        return {
            ...state,
            filteredActivities: [...sortedDates]
        }
        //---------------------------------------------------------------------    
/*         case RESET_FILTER:
            return{
                ...state,
                continentFilter: null,
                activityFilter: null
            } */
        
        default: return state;
    }
}


