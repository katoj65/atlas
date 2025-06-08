<template>
<VaLayout style="min-height: 800px">
<template #top>
<Header style="position:fixed"/>
</template>

<template #left>
<VaSidebar class="mt-4" style="position:fixed;">

<VaSidebarItemContent>
<VaSidebarItemTitle class="pt-2">
<!-- <img src="@/assets/logo1.png" alt="logo" style="width: 90px; height: 30px;" /> -->
<!-- <p style="font-size:13px;color:#85929e;" class="mt-2">The location intelligence apps.</p> -->

<h3 style="text-transform:capitalize;font-size:20px;" class="pt-3">{{ title }}</h3>





<VaButtonDropdown preset="primary" class="mr-2 mb-2">
Button without label
</VaButtonDropdown>




</VaSidebarItemTitle>
</VaSidebarItemContent>

<VaSidebarItem>
<VaSidebarItemContent>
<VaIcon name="home" />
<VaSidebarItemTitle>
Home
</VaSidebarItemTitle>
</VaSidebarItemContent>
</VaSidebarItem>
<VaSidebarItem>
<VaSidebarItemContent>
<VaIcon name="phone" />
<VaSidebarItemTitle>
About
</VaSidebarItemTitle>
</VaSidebarItemContent>
</VaSidebarItem>

</VaSidebar>
</template>

<template #content>
<main class="p-4 mt-4"  id="main">
<slot></slot>
</main>
</template>
</VaLayout>
</template>

<script setup>
import { ref,defineProps } from 'vue';
import Header from '@/components/Header.vue';

const props=defineProps({
title:String,

});




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
</style>