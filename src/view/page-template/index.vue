<template>
  <grid-layout
    v-bind="gridLayoutConfig"
    :layout="layout"
    :is-draggable="editor"
    :is-resizable="editor"
  >
    <template v-for="(item, index) in layout" :key="item.i">
      <grid-item
        v-bind="item"
        class="grid-item-page"
      >
        123
      </grid-item>
    </template>
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

<style lang="scss" scoped>
.grid-item-page {
  background-color: #fff !important;
  border: 1px solid transparent !important;
  border-radius: 14px !important;
}
</style>