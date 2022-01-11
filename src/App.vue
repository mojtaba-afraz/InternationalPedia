<template>
  <v-app :class="getBackgroundColor">
    <v-app-bar
        elevation="2"
        app
        color="primary"
        dark
    >
      <v-container fluid class="container">
        <v-row>
          <v-col :md="10" :cols="7">
            <div class="d-flex align-items-center align-left">
              <h4 class="pt-2 text--text">Where in the world?</h4>
            </div>
          </v-col>
          <v-col :md="2" :cols="5">
            <theme-switcher/>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
export default {
  name: 'App',
  components: {ThemeSwitcher},
  data: () => ({}),

  computed:{
    getBackgroundColor(){
      if (this.$vuetify.theme.dark === true){
        return 'dark'
      }
      else{
        return 'light'
      }
    }
  }
};
</script>

<style>
.dark{
  background-color: #202d36 !important
}
.light{
  background-color:#fafafa !important
}
</style>
