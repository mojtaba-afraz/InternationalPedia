<template>
  <div @click="()=>{$router.push('/details/'+text)}" class="chips primary">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "MainChips",
  props: ['text']
}
</script>

<style scoped>
.chips {
  margin: 5px 5px;
  display: inline-block;
  padding: 0px 25px !important;
  box-shadow: 0px 0px 6px #302d2d;
  cursor:pointer
}
</style>
