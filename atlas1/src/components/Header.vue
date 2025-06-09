<script setup>
const props=defineProps({
title:String

});



</script>
<style scoped>
.custom-header {
background-color: #1e1e2f; /* Replace with your desired color */
color: white; /* Optional: change text color */
}
</style>
<template>
<VaNavbar color="" class="mb-0 p-0 custom-header" style="padding:10px;background:#0f2c2c;">
<template #left>
<VaNavbarItem class="logo">

<router-link to="/">
<span style="font-size:13px;">
<img src="@/assets/logo1.3.png" alt="logo" style="width: 60px; height: 20px;" class="mr-3" /> Map of <span style="text-transform:capitalize;">{{ title }}</span> district
</span>
</router-link>


</VaNavbarItem>
</template>
<template #right>
<VaNavbarItem class="hidden sm:block p-0 m-0" style="font-size:12px;">
<router-link to="/test" style="color:white;">
    <VaIcon name="home" /> Home test</router-link>
</VaNavbarItem>
<VaNavbarItem class="hidden sm:block p-0 m-0" style="font-size:12px;">
<VaIcon name="notifications" /> Alerts
</VaNavbarItem>
<VaNavbarItem class="hidden sm:block p-0 m-0" style="font-size:12px;">
<VaIcon name="search" /> Search
</VaNavbarItem>

<VaNavbarItem class="hidden sm:block p-0 m-0" style="font-size:12px;margin-right:30px;">
<VaIcon name="person" /> Users
</VaNavbarItem>

</template>
</VaNavbar>

</template>