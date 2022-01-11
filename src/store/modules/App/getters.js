export default {
    GET_ALL_COUNTRIES(state) {
        return country =>{
            if (state.AllCountries){
                if (country){
                    return state.AllCountries.find(localCountry => localCountry.alpha3Code === country)
                }
                else {
                    return state.AllCountries;
                }
            }
            else {
                return false
            }
        }
    },
    SEARCH_IN_COUNTRIES(state) {
        return name =>{
            if (state.AllCountries){
                if (name){
                    return state.AllCountries.filter(localCountry => localCountry.name.toLowerCase().includes(name.toLowerCase()))
                }
                else {
                    return state.AllCountries.slice(0,8);
                }
            }
            else {
                return false
            }
        }
    },
}
