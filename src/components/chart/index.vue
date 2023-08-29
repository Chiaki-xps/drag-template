<template>
  <div class="chart" :id="containerId" />
</template>

<script setup>
import Chart from './index';
import lodash from 'lodash';

const props = defineProps({
  type: { type: String, required: true, default: 'line' },
  config: { type: Object, required: false, default: () => { } },
  data: { type: Array, required: false, default: () => [] },
});

const { type, config, data } = toRefs(props);

const containerId = ref('chart-container');
let chart = null;

const init = () => {
  const id = lodash.uniqueId();
  containerId.value = `chart-container-${id}`;
  nextTick(() => {
    chart = new Chart({
      container: containerId.value,
      type: type.value,
      config: config.value,
      data: data.value
    });
  });
};

watch(config, options => {
  chart.update(options);
}, { deep: true });

watch(data, options => {
  chart.changeData(options);
}, { deep: true });

const destroy = () => {
  chart && chart.destroy();
};

onMounted(() => {
  init();
});
onUnmounted(() => destroy());
</script>

<style lang="scss" scoped>
.chart {
  height: 100%;
  width: 100%;
}
</style>