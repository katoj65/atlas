<script setup>


</script>

<template>
  <ol-map style="height: 800px;">
    <ol-view :center="[0.3476, 32.5825]" :zoom="1" projection="EPSG:4326" />
    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>
  </ol-map>
</template>