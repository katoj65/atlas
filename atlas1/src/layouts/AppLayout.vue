<template>
<div class="common-layout" >
<el-container>
<el-header style="padding:0;height:40px;padding:10px;position:fixed;z-index:1000;background:white;width:100%;">

<VaNavbar style="padding:0;background:none;">
<template #left>
<VaNavbarItem class="navbar-item-slot">
<router-link to="/">
<span style="font-size:18px;font-weight:bold;">
<img src="@/assets/logo1.png" alt="logo" style="width: 60px; height: 20px;" class="mr-3" />
<span v-if="store.state.dock!=''" style="text-transform:capitalize;">

<el-dropdown trigger="click" style="padding:0;margin:0;">
<span class="el-dropdown-link" style="padding:0;margin:0;font-size:18px;">
{{ store.state.dock.data.name+' District' }}
</span>
<template #dropdown>
<el-dropdown-menu style="width:300px;">
<el-dropdown-item v-for="(s,key) in district.data" :key="key" style="text-transform:capitalize;">
<a href="#" style="color:black;width:100%;" @click="changeDock(s)">{{ s.name }}</a>
</el-dropdown-item>
</el-dropdown-menu>
</template>
</el-dropdown>

</span>

</span>
</router-link>
</VaNavbarItem>
</template>
<template #right>
<VaNavbarItem class="navbar-item-slot">
<user-account></user-account>
</VaNavbarItem>
</template>
<template #center>
<VaNavbarItem class="navbar-item-slot">
</VaNavbarItem>
</template>
</VaNavbar>






</el-header>
<el-container style="margin-top:40px;">
<el-aside style="width:100px;padding-top:10px;">
<ul>
<li v-for="(item, index) in mainMenu" :key="index">
<div style="text-align: center;">
<VaIcon :name="item.icon" style="font-size:25px;"/>
</div>
<div style="font-size:12px;text-align:center;margin-top:7px;">
{{ item.title }}
</div>
</li>




</ul>




</el-aside>
<el-main style="height:800px;padding:0;">
<slot></slot>
</el-main>
</el-container>
</el-container>
</div>
</template>
<script setup>
import Connection from '@/database/database.js';
import UserAccount from '@/components/UserAccount.vue';
import { useStore } from 'vuex';
import {onMounted, reactive} from 'vue';

const store = useStore();
const response=reactive({data:{}});
const district=reactive({data:{}});
const db=new Connection;

 //menu
const mainMenu=[
{title:'Operations',url:'',icon:'radio_button_checked'},
{title:'Incidents',url:'',icon:'transcribe'},
{title:'Deployments',url:'',icon:'person'},
{title:'Critical Assets',url:'',icon:'dataset'},
{title:'Security Zones',url:'',icon:'incomplete_circle'},
{title:'Reports',url:'',icon:'list_alt'},
{title:'Training',url:'',icon:'sports_gymnastics'},
{title:'Emergencies',url:'',icon:'person_pin_circle'},
];

onMounted(()=>store.state.dock=response);

onMounted(async () => {
let data =  db.database()
.from('dock')
.select('id,name,lat,lng','district_id');
await data.then((result) => {
var result=result.data;
result.forEach((item)=>{
response.data=item;
});
}).catch((err) => {
console.log(err);
});
});


onMounted(async () => {
await db.database().channel('realtime')
.on('postgres_changes',{
 event:'UPDATE',
 schema:'public',
table:'dock'},
payload => {
let res=payload.new;
response.data=res;
}
).subscribe();
});


onMounted(async() => {
await db.database()
.from('district')
.select('id,name,lat,lng')
// .neq('name',props.data.name)
.then((result)=>{
district.data=result.data;
})
.catch((err)=>{
console.log(err);
});
});

const changeDock = async (item)=>{
await db.database().from('dock').update({
lat:item.lat,
lng:item.lng,
name: item.name,
district_id: item.id
}).eq('name',store.state.dock.data.name).then((res)=>{

}).catch((error)=>{console.log(error);});

}










</script>
<style lang="css">
ul li{
padding:8px;
padding-top:15px;
}


</style>