<template>
<el-dropdown :hide-on-click="false">
<a href="#" class="el-dropdown-link" style="color:black;">
<VaIcon name="person" style="font-size:25px;color:black;"/>
 User name
</a>
<template #dropdown>
<el-dropdown-menu>
<el-dropdown-item>Profile</el-dropdown-item>
<el-dropdown-item>Settings</el-dropdown-item>
<el-dropdown-item>Logout</el-dropdown-item>
</el-dropdown-menu>
</template>
</el-dropdown>
</template>

<script setup>

</script>

<style scoped>
.example-showcase .el-dropdown + .el-dropdown {
margin-left: 15px;
}
.example-showcase .el-dropdown-link {
cursor: pointer;
color: var(--el-color-primary);
display: flex;
align-items: center;
}
</style>