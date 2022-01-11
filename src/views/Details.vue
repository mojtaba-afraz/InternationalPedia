<template>
  <v-container fluid>
      <v-row class="ml-0 mr-0 mt-5 mb-5" justify="space-between">
        <v-col class="ma-0 pa-0" :cols="5">
          <v-btn color="primary" style="float:left !important" class="ma-2 pl-8 pr-8 text--text" @click="()=>{$router.push({name:'Home'})}">
            <v-icon left dark>mdi-arrow-left</v-icon>
            Back
          </v-btn>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col class="pa-0" v-if="country" :lg="6" :md="6" :sm="12" :cols="12">
          <v-img width="100%"  :src="country.flag"/>
        </v-col>
        <v-col :sm="12" :md="5" :lg="5" :cols="12">
          <v-row>
            <v-col class="pt-15 pb-3" v-if="country" :cols="12">
              <h1 class="mb-8">{{country.name}}</h1>
              <v-row class="ma-0">
                <v-col class="pa-0" :sm="12" :md="6" :cols="12">
                  <p><b>Native Name: </b> {{country.nativeName}}</p>
                  <p><b>Population: </b>{{ Number(country.population).toLocaleString()}}</p>
                  <p><b>Region: </b>{{country.region}}</p>
                  <p><b>Sub Region: </b>{{country.subregion}}</p>
                  <p><b>Capital:   </b>{{country.capital}}</p>
                </v-col>
                <v-col class="pa-0" :sm="12" :md="6" :cols="12">
                  <p><b>Top Level Domain: </b> {{country.topLevelDomain[0]}}</p>
                  <p><b>Currencies: </b> {{country.currencies[0].name}}</p>
                  <p><b>languages: </b> <span :key="key" v-for="(lang,key) in country.languages"> {{lang.name}} </span></p>
                </v-col>
              </v-row>
            </v-col>
            <v-col class=" pb-3" v-if="country" :cols="12">
              <p>
                Border Countries: <main-chips :key="index" :text="text" v-for="(text,index) in country.borders"/>
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import MainChips from "../components/Chips/MainChips/MainChips";
export default {
  name: "Details",
  components: {MainChips},
  data(){
    return {
      country:null,
    }
  },
  computed:{
    ...mapGetters('App',['GET_ALL_COUNTRIES'])
  },
  methods:{
    ...mapActions('App',['GetAllCountries']),
    async loadCountry(){
      if (!this.GET_ALL_COUNTRIES(this.$route.params.country)){
        await this.GetAllCountries()
        this.country = this.GET_ALL_COUNTRIES(this.$route.params.country)
      }
      else{
        this.country = this.GET_ALL_COUNTRIES(this.$route.params.country)
      }
    }
  },
  watch:{
    $route(){
      this.loadCountry()
    }
  },
  mounted() {
    this.loadCountry()
  }
}
</script>

<style scoped>

</style>
