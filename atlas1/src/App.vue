<template>
<div>
<login v-if="store.state.session==null"></login>
<router-view v-else></router-view>
</div>
</template>
<script setup>
import { onMounted} from 'vue';
import { useStore } from 'vuex';
import Login from '@/components/Login.vue';
const store = useStore();



onMounted(() => {

console.log(store.state.session);
});







</script>