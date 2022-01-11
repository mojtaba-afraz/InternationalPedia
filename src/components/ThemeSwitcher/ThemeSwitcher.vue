<template>
  <v-btn block text v-if="!$vuetify.theme.dark" class="text--text" @click="()=>{$vuetify.theme.dark = true}">
    <v-icon left>mdi-mine</v-icon>
    <b>light Mode</b>
  </v-btn>
  <v-btn block text v-else class="text--text" @click="()=>{$vuetify.theme.dark = false}">
    <v-icon left>mdi-power-sleep</v-icon>
    <b>Dark Mode</b>
  </v-btn>
</template>

<script>
export default {
name: "ThemeSwitcher"
}
</script>

<style scoped>

</style>
