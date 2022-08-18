<script>
  import { useSocketIO } from "./service/socket.js";
  const { socket } = useSocketIO()
  socket.on("data", (apiData) =>{
    console.log(JSON.parse(apiData));
  })

</script>
<template>

</template>

<style scoped>
header {
  line-height: 1.5;
}



@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }




}
</style>
