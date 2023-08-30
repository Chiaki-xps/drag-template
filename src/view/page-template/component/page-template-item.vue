<template>
  <div class="chart-wrapper">
    <c-chart :type="$attrs.type" :data="data" :config="$attrs.config" />
  </div>
</template>

<script setup>
defineProps({
  data: { type: [String, Object, Number, Boolean], default: '' }
});
</script>

<style lang="scss" scoped>
.chart-wrapper {
  height: 100%;
}
</style>