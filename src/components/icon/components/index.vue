<template>
  <component v-if="elName" :is="ElementPlusIcons[elName]" />
  <svg v-else-if="name" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
  <template v-else-if="src">
    <img :src="src" alt="" :onerror="onerrorIcon" />
  </template>
</template>

<script setup>
import * as ElementPlusIcons from '@element-plus/icons-vue';

const props = defineProps({
  name: { type: String, required: false },
  elName: { type: String, required: false },
  src: { type: String, required: false, default: '' },
  onerrorIcon: { type: String, required: false, default: '' }
});

const { src } = toRefs(props);

</script>

<style lang="scss" scoped></style>