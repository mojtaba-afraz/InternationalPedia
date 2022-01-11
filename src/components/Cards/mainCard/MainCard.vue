<template>
  <v-card @click="()=>{$router.push('/details/' + item.alpha3Code)}" style="margin : 0 7px !important" elevation="1" color="primary" class="mx-auto cursor-pointer">
    <v-img class="mb-10" :lazy-src="item.flag" :src="item.flag" height="200px"/>
    <v-card-subtitle class="pa-7">
      <h2 class="text--text mb-3">{{item.name}}</h2>
      <h4>Population: <span>{{ Number(item.population).toLocaleString()}}</span> </h4>
      <h4>Region: <span>{{item.region}}</span></h4>
      <h4>Capital: <span>{{item.capital}}</span></h4>
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "MainCard",
  props: {
    item: {
      type: Object,
      default(){return []}
    }
  },
  data: () => ({
    show: false,
  }),
}
</script>
