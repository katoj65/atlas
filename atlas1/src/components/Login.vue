<template>
<div class="common-layout">
<el-container>
<el-aside width="35%"></el-aside>
<el-main class="pt-5 mt-5">

<form @submit.prevent="submit">
<h3 style="text-align:center;font-size:20px;font-weight:bold;color:#2c3e50;">
ATLAS
</h3>
<el-card shadow="never" class="mt-3" style="min-width:200px;">
<h5 class="text-center mb-3">Login</h5>


<div>
<el-input v-model="email" placeholder="Please enter email" clearable
/>

</div>

<div>
<el-input v-model="pass" type="password" placeholder="Please enter password" show-password
/>

</div>
<div>
<button type="submit" style="padding:5px;background:white;border:solid thin silver;border-radius:5px;width:100%;">Login</button>
</div>


</el-card>
</form>
</el-main>
<el-aside width="35%"></el-aside>
</el-container>
</div>
</template>
<script setup>
import { ref,onMounted } from 'vue';
import Connection from '@/database/database.js';
import store from '@/store';

const email= ref('katoj65@gmail.com');
const pass= ref('09/u/2252');

const submit= async ()=>{
const con = new Connection;
await con.signIn(email.value, pass.value)
.then((res) => {
if (res) {
const session=res.data.session;
store.state.session=session;
} else {
console.error(res);
}
})
.catch((error) => {
console.error('Error during login:', error);
});

};



// Reactive store for sessiont
onMounted(async() => {
const con=new Connection;
await con.database().auth.getSession().then((response)=>{
const session=response.data.session;
store.state.session=session;
}).catch((error)=>{console.log(error)});

});






</script>
<style scoped>
div{
padding:5px;
}
</style>