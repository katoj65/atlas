<template>
  <div>
    <div ref="mapContainer" class="map-container"></div>
    <p>Distance: {{ distanceInKm }} km</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const mapContainer = ref(null)
const distanceInKm = ref(0)

onMounted(() => {
  const pointA = new google.maps.LatLng(0.3476, 32.5825) // Kampala
  const pointB = new google.maps.LatLng(0.3155, 32.5656) // Example point

  const map = new google.maps.Map(mapContainer.value, {
    center: pointA,
    zoom: 12,
  })

  // Draw markers
  new google.maps.Marker({ position: pointA, map, title: 'Point A' })
  new google.maps.Marker({ position: pointB, map, title: 'Point B' })

  // Draw a line between the points
  new google.maps.Polyline({
    path: [pointA, pointB],
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2,
    map,
  })

  // Calculate distance using Geometry library
  const distanceMeters = google.maps.geometry.spherical.computeDistanceBetween(pointA, pointB)
  distanceInKm.value = (distanceMeters / 1000).toFixed(2)
})
</script>

<style scoped>
.map-container {
  height: 400px;
  width: 100%;
}
</style>
