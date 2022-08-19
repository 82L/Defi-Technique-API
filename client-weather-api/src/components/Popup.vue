<script setup>
const props = defineProps(
    {
      cityName: {
        type: String,
        default: "Somewhere"
      },
      weatherPicto: {
        type: String,
        default: "Somewhere"
      },
      weatherCast: {
        type: String,
        default: "Somewhere"
      }
    }
);
</script>
<template>
  <div  ref="popup" class="popup">
    <div class="header-container" >
      <h3 class="city-name">{{ cityName }}</h3>
      <img class="weather-picto" v-bind:src="weatherPicto" alt="">
    </div>
    <p class="weather-cast">{{ weatherCast }}</p>

  </div>

</template>
<style scoped>


.popup{
  width: 438px;
  border-radius: 42px;
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  background-color:  #D9D9D9CC;
  font-family: Inter, sans-serif;
  padding-left: 30px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 20px;
  max-width: 90%;
}
.city-name{
  font-size: 32px;
  font-weight: 700;
}
.weather-cast{
  font-size: 18px;
  font-weight: 400;
}
.weather-cast::first-letter{
  text-transform: uppercase;
}
.weather-picto{
  width: 40px;
  height: 40px;
}
.header-container{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>