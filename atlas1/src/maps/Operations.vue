<script setup>
import { GoogleMap, Circle } from 'vue3-google-map';
import { useStore } from 'vuex';
const store = useStore();

const center = { lat: 0.3476, lng: 32.5825}

const cities = {
  chicago: {
    center: { lat: 0.3476, lng: 32.6925},
    population: 271,
  },
  newyork: {
    center: { lat: 0.3476, lng: 32.5825},
    population: 840,
  },
  losangeles: {
    center: { lat: 0.3480, lng: 32.4925},
    population: 38,
  },
  vancouver: {
    center: { lat: 49.25, lng: -123.1 },
    population: 603502,
  },
}

const circles = {}

for (const key in cities) {
  circles[key] = {
    center: cities[key].center,
    radius: Math.sqrt(cities[key].population) * 100,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
  }
}


const message=()=>{
    alert('clicked');
}








</script>

<template>
  <GoogleMap
    :api-key="store.state.key"
    style="width: 100%; height: 800px"
    mapTypeId="terrain"
    :center="center"
    :zoom="12"
  >
    <Circle v-for="circle in circles" :options="circle" @click="message('clicked');" />
  </GoogleMap>
</template>