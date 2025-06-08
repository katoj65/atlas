<script setup>
import Connection from '@/database/database.js';
import { onMounted, reactive } from 'vue';
const props=defineProps({
  title:String,
  data:Object,
});

const state=reactive({
isLoading: false,
response:[],
});

onMounted(async() => {
state.isLoading=true;
const db=new Connection;
await db.database()
.from('district')
.select('id,name,lat,lng')
.neq('name',props.data.name)
.then((result)=>{
state.isLoading=false;
state.response=result.data;
})
.catch((err)=>{
console.log(err);
});
});




const changeDock = async (item)=>{
const db=new Connection;
await db.database().from('dock').update({
lat:item.lat,
lng:item.lng,
name: item.name,
district_id: item.id
}).eq('name',props.title).then((response)=>{
}).catch((error)=>{console.log(error);});



}


</script>
<template>
<div>
<VaButtonDropdown class="b-0 mt-2" preset="secondary" :label="title" border-color="secondary"
 style="text-transform:uppercase;width:100%;border:none; text-align:left;font-size:20px;color:black;">

<VaMenuList>
<VaMenuItem v-for="i in state.response" :key="i.id" :value="i.id" style="text-transform:capitalize;">
<a href="#" class="text-dark p-0" style="color:black;width:100%;" @click="changeDock(i)">

  {{ i.name }}
</a>
</VaMenuItem>
</VaMenuList>

</VaButtonDropdown>
<el-divider border-style="double" style="margin:0;margin-top:10px;"/>





</div>
</template>