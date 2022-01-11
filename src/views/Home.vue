<template>
  <v-container fluid class="container">
    <v-row class="ma-0">
      <v-col
          cols="12"
          sm="5"
      >
        <v-text-field
            solo
            @keyup="keyupSearch()"
            @keydown="keydownSearch()"
            v-model="searchValue"
            background-color="primary"
            append-icon="mdi-search"
            label="Search"
            clearable
        ></v-text-field>
      </v-col>
      <v-col
          class="d-flex"
          cols="12"
          sm="4"
      >
        <v-select
            background-color="primary"
            v-model="sort"
            :items="['none','population','name']"
            label="Sort By"
            solo
        ></v-select>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col class=" justify-center" v-if="loadedItems" :key="index" v-for="(item,index) in loadedItems" :md="4" :lg="3" :sm="6" :cols="12">
        <MainCard :item="item"/>
      </v-col>
    </v-row>
    <v-row justify="center" class="ma-0">
      <v-col :md="5" :lg="4" :cols="12">
        <v-btn block rounded color="info" v-if="loadedItems.length <= GET_ALL_COUNTRIES().length && GET_ALL_COUNTRIES().length !== 0 && !searchValue" @click="loadMore(loadedItems.length)">load More
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import MainCard from "../components/Cards/mainCard/MainCard";
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      loadedItems: [],
      searchValue: null,
      typingTimer: null,
      doneTypingInterval: 1500,
      sort:'none'
    }
  },
  computed: {
    ...mapGetters('App', ['GET_ALL_COUNTRIES', 'SEARCH_IN_COUNTRIES'])
  },
  components: {MainCard},
  watch:{
    'sort'(){
      if (this.sort !== 'none'){
        if (this.searchValue){
          this.doneTyping()
        }
        this.Sort()
      }
    }
  },
  methods: {
    ...mapActions('App', ['GetAllCountries']),
    loadMore(count) {
      let UpdateCount = count + 8
      this.loadedItems = this.GET_ALL_COUNTRIES().slice(0, UpdateCount)
    },
    keyupSearch() {
      clearTimeout(this.typingTimer);
      this.typingTimer = setTimeout(this.doneTyping, this.doneTypingInterval);
    },
    keydownSearch() {
      clearTimeout(this.typingTimer);
    },
    doneTyping() {
      this.loadedItems = this.SEARCH_IN_COUNTRIES(this.searchValue)
      this.Sort()
    },
    dynamicSort(property) {
      var sortOrder = 1;
      if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
      }
      return function (a, b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
      }
    },
    Sort(){
      this.loadedItems.sort(this.dynamicSort(this.sort))
    }
  },
  async created() {
    if (!this.GET_ALL_COUNTRIES()) {
      await this.GetAllCountries()
    }
    this.loadedItems = this.GET_ALL_COUNTRIES().slice(0, 8)
  }
}
</script>
