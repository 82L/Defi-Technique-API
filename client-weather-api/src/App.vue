<script setup>

import Popup from "./components/Popup.vue";
import { ref } from 'vue';
const pictoUrl = "http://openweathermap.org/img/wn/";
const pictoEndUrl = "@2x.png";
// Popup.methods.setPopup("true", "true", "true")
// let self = this;
const cityname = ref('City')
const cast = ref('Loading')
const picto = ref(pictoUrl + "01d" + pictoEndUrl)
import { useSocketIO } from "./service/socket.js";
const { socket } = useSocketIO();
socket.on("data", (apiData) => {
  let json = JSON.parse(apiData);
  cityname.value = json.name;
  picto.value= pictoUrl + json.weather[0].icon + pictoEndUrl;
  cast.value=json.weather[0].description

});

</script>
<template>
  <Popup :city-name="cityname" :weather-cast="cast" :weather-picto="picto"/>
</template>
<style scoped>

</style>
