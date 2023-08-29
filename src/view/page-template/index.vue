<template>
  <grid-layout
    v-bind="gridLayoutConfig"
    :layout="layout"
    :is-draggable="editor"
    :is-resizable="editor"
  >
    123
  </grid-layout>
</template>

<script setup>
import { GridItem, GridLayout } from 'v3-grid-layout';
import { gridLayoutConfig } from '@/config/config.js';

const props = defineProps({
  layout: { type: Array, required: true, default: () => [] },
  editor: { type: Boolean, default: false }, // 拖拽编辑模式
});

const { layout, editor } = toRefs(props);

</script>

<style lang="scss" scoped></style>