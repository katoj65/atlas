<script setup>
import AppLayout from '@/layouts/AppLayout.vue';
import MapDemo from '@/maps/MapDemo.vue';
import Connection from '@/database/database.js';
import { onMounted, ref, reactive } from 'vue';


const db=new Connection;

var state=reactive({
isLoading: false,
location:'',
title:'',
data:{},
});



onMounted(async () => {
state.isLoading=true;
let data =  db.database()
.from('dock')
.select('id,name,lat,lng','district_id');
await data.then((result) => {
state.isLoading=false;
var result=result.data;
result.forEach((item) => {
state.location=item;
state.title=item.name;
state.data=item;
// You can process each item here if needed
});
}).catch((err) => {
console.log(err);
});

});


//test the real time database
onMounted(async () => {
await db.database().channel('realtime')
.on('postgres_changes',{
 event:'UPDATE',
 schema:'public',
table:'dock'},
payload => {
let response=payload.new;
state.location=response;
state.title=response.name;
state.data=response;
}
).subscribe();
});







</script>
<template>
<app-layout :title="state.title" :data="state.data">
<map-demo v-if="state.isLoading==false" :location="state.location"/>
</app-layout>
</template>