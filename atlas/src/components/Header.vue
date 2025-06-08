<script>

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
<span style="font-size:13px;">
<img src="@/assets/logo1.3.png" alt="logo" style="width: 60px; height: 20px;" />
</span>
</VaNavbarItem>
</template>
<template #right>
<VaNavbarItem class="hidden sm:block p-0 m-0" style="font-size:12px;">
<VaIcon name="home" /> Home
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