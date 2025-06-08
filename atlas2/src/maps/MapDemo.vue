<script setup>
import { GoogleMap, Marker } from 'vue3-google-map';
import { defineProps,computed } from 'vue';

const location=defineProps({
location:Object
});
const mapData=computed(() => {
  return {
    lat: location.location.lat,
    lng: location.location.lng
  };
});




const center = { lat: 0.3476, lng: 32.5825}


//0.1884032
//32.4622927
</script>


<template>
<div>

  <GoogleMap
  api-key="AIzaSyCjNJWMrdiyB68kNLu0pPyEWuZ0IZIXvno"
  style="width: 100%; height: 800px"
  :center="mapData"
  :zoom="12"
  >
<Marker :options="mapData" />
  </GoogleMap>
  </div>
</template>