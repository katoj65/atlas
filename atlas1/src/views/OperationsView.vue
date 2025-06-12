<template>
<app-layout :title="title">
<div style="padding:10px;font-size:13px;">
some information
</div>
<operations />
</app-layout>
</template>
<script setup>
import AppLayout from '@/layouts/AppLayout.vue';
import Operations from '@/maps/Operations.vue';
const title='Operations Management';

</script>