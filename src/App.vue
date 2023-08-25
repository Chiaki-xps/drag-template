<template>
  <div class="app">
    <tpl-items @add-item="handleAdd" />
  </div>
</template>

<script setup>
import tplItems from './components/tpl-items.vue';

const handleAdd = () => {

};
</script>

<style scoped>
.app {
  display: flex;
  box-sizing: border-box;
  background-color: rgb(241, 243, 247);
  height: 100%;
  padding: 16px;
}
</style>
