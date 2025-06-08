<script setup>
import AppLayout from '@/layouts/AppLayout.vue';
import MapDemo from '@/maps/MapDemo.vue';
import Connection from '@/database/database.js';
import { onMounted, ref, reactive } from 'vue';



var state=reactive({
isLoading: false,
location:'',
title:''
});




onMounted(async () => {

state.isLoading=true;
const db=new Connection;
let data =  db.database()
.from('dock')
.select('name,lat,lng');
await data.then((result) => {
state.isLoading=false;
var result=result.data;
result.forEach((item) => {
state.location=item;
state.title=item.name;
// You can process each item here if needed
});



// console.log(result);

}).catch((err) => {
console.log(err);
});

});



</script>
<template>
<app-layout :title="state.title">
<map-demo v-if="state.isLoading==false" :location="state.location"/>
</app-layout>
</template>