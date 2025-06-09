<template>
<app-layout>
<map-demo></map-demo>
</app-layout>
</template>
<script setup>
import AppLayout from '@/layouts/AppLayout.vue';
import MapDemo from '@/maps/MapDemo.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';


const store = useStore();




// const count = computed(() => store);

</script>