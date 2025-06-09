<script setup>
import { GoogleMap, Marker } from 'vue3-google-map';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const center = { lat: 0.3476, lng: 32.5825}
const mapData= computed(() => {
let res={};
if (store.state.dock.data!=null) {
res={
lat: store.state.dock.data.lat,
lng: store.state.dock.data.lng,
};
}
return res;
});






//0.1884032
//32.4622927
</script>


<template>
<div>
<GoogleMap api-key="AIzaSyCjNJWMrdiyB68kNLu0pPyEWuZ0IZIXvno" style="width: 100%; height: 800px"
:center="mapData"
:zoom="12" v-if="mapData!=''">
<Marker :options="mapData" />
</GoogleMap>
</div>
</template>
