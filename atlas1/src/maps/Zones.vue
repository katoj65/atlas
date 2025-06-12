<script setup>
import { GoogleMap, Rectangle } from 'vue3-google-map'

import { useStore } from 'vuex';
const store = useStore();


const center = { lat: 33.678, lng: -116.243 }
const rectangle = {
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
  bounds: {
    north: 33.685,
    south: 33.680,
    east: -116.234,
    west: -116.251,
  },
}
</script>

<template>
  <GoogleMap
    api-key="YOUR_GOOGLE_MAPS_API_KEY"
    style="width: 100%; height: 800px"
    mapTypeId="terrain"
    :center="center"
    :zoom="11"
  >
    <Rectangle :options="rectangle" />
  </GoogleMap>
</template>
