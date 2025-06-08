<template>
<VaLayout style="min-height: 800px">
<template #top>
<Header style="position:fixed" :title="title"/>
</template>

<template #left>
<VaSidebar class="pt-4" style="position:fixed;">
<VaSidebarItemContent>
<VaSidebarItemTitle class="pt-2">
<!-- <img src="@/assets/logo1.png" alt="logo" style="width: 90px; height: 30px;" /> -->
<!-- <p style="font-size:13px;color:#85929e;" class="mt-2">The location intelligence apps.</p> -->

<!-- <h3 style="text-transform:capitalize;font-size:20px;" class="pt-3">{{ title }}</h3> -->



<location-title :title="title" :data="data"/>

</VaSidebarItemTitle>
</VaSidebarItemContent>

<VaSidebarItem v-for="(k,key) in mainMenu" :key="key" class="border-bottom">
<VaSidebarItemContent>
<VaIcon :name="k.icon" />
<VaSidebarItemTitle>
{{ k.title }}
</VaSidebarItemTitle>
</VaSidebarItemContent>

</VaSidebarItem>


</VaSidebar>
</template>

<template #content>
<main class="p-2 mt-4"  id="main">
<slot></slot>
</main>
</template>
</VaLayout>
</template>

<script setup>
import { ref} from 'vue';
import Header from '@/components/Header.vue';
import LocationTitle from '@/components/LocationTitle.vue';

const props=defineProps({
title:String,
data:Object,
});

//menu
const mainMenu=[
// {title:'Home',url:'',icon:'home'},
{title:'Operations',url:'',icon:'radio_button_checked'},
{title:'Incidents',url:'',icon:'transcribe'},
{title:'Deployments',url:'',icon:'person'},
{title:'Critical assets',url:'',icon:'dataset'},
{title:'Security zones',url:'',icon:'incomplete_circle'},
{title:'Reports',url:'',icon:'list_alt'},
{title:'Training',url:'',icon:'sports_gymnastics'},
// {title:'Alerts',url:'',icon:'notifications'},


];




</script>
<style scoped>
#navbar{
background-color:#0f2c2c;
border-bottom: 1px solid #dee2e6;
position: fixed;
}

#main{
margin-left:18%;
}
.border-bottom{
 border-bottom:solid thin #d5dbdb;
 padding:0px;
 margin:0;
}
</style>