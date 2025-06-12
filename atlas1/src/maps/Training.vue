
<script setup>
import axios from 'axios';
import { GoogleMap, Circle, Polyline,  } from 'vue3-google-map';
import { useStore } from 'vuex';
import { onMounted } from 'vue';
const store = useStore();
import Connection from '@/database/database';

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


const path = {
  path: [{ lat: 0.3476, lng: 32.6925},{ lat: 0.3476, lng: 32.5825},{ lat: 0.3480, lng: 32.4925}],
  geodesic: true,
  strokeColor: '#FF0000',
  strokeOpacity: 1.0,
  strokeWeight: 20,
}



const origin= '0.3476,32.5825';
const destination= '0.3480,32.4925';
const API_KEY = store.state.key; // Assuming the API key is stored in Vuex state
let url="https://maps.googleapis.com/maps/api/distancematrix/json?origins="+origin+"&destinations="+destination+"&key="+API_KEY+"";
const DB = new Connection();

onMounted(async () => {
// // Fetch distance data from Google Distance Matrix API
// await DB.database().functions.invoke('test', {
// //   body: { origin: '0.3476,32.5825', destination: '0.3480,32.4925' },
// }).then(response=>console.log(response)).catch(error=>console.log(error));

// axios.get('https://xlkyvfzyvgfttnxcdtej.supabase.co/functions/v1/test',{

// })
//   .then(response => {
//     console.log('Distance Matrix API Response:', response.data);
//     // Process the response data as needed
//   })
//   .catch(error => {
//     console.error('Error fetching distance data:', error);
//   });


const item=DB.database();
console.log(item.auth.getSession());



});











</script>

<template>
  <GoogleMap
    :api-key="store.state.key"
    style="width: 100%; height: 800px"
    mapTypeId="roadmap"
    :center="center"
    :zoom="12"
  >
<Circle v-for="circle in circles" :options="circle" @click="message('clicked');" />
<Polyline :options="path" />

  </GoogleMap>
</template>