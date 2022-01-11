import axios from "axios";

export default {
    /* eslint-disable */
    async GetAllCountries({commit}) {
        return await axios.get(`all`).then((res) => {
            commit('SET_ALL_COUNTRIES', res.data)
            return res.data
        }).catch((res) => {
            return res.response.data
        })
    },
};
