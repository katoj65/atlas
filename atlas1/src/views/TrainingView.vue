<template>
<app-layout :title="title">
<div style="padding:10px;">
<h4>
<span style="padding-right:10px;">Rescue and evacuation mission</span>



    <el-dropdown trigger="click">
        <a href="#" class="el-dropdown-link text-muted" style="border:solid thin #aeb6bf;padding:5px;border-radius:5px;color:black;font-weight:normal;">
          Add
        </a>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>
              Action 2
            </el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item>Action 4</el-dropdown-item>
            <el-dropdown-item>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>


</h4>
</div>
<training></training>
</app-layout>
</template>
<script setup>
import AppLayout from '@/layouts/AppLayout.vue';
import Training from '@/maps/Training.vue';

const title = 'Training Simulation';




</script>
<style scoped>
h4{
font-size:14px;
}
</style>