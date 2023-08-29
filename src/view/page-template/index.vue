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
        drag-ignore-from=".form-item,.el-scrollbar"
      >
        <div class="grid-item-container">
          <div v-if="showLabel" class="grid-item-header">
            <span class="label">{{ item.label ?? (item.i18nLabel ? $t(item.i18nLabel) : '') }}</span>
            <div class="icon-group" v-if="editor && canManage">
              <c-icon name="edit" @click="$emit('edit', index)" />
              <c-icon name="delete" @click="$emit('delete', index)" />
            </div>
          </div>

          <div :class="['grid-item-content', { 'full': !showLabel }]">
            <page-template-item v-bind="item" @update:data="onUpdate(index, $event)" />
          </div>

        </div>
      </grid-item>
    </template>
  </grid-layout>
</template>

<script setup>
import { GridItem, GridLayout } from 'v3-grid-layout';
import { gridLayoutConfig } from '@/config/config.js';
import pageTemplateItem from './page-template-item.vue';

// const emit =
defineEmits(['update:active', 'update:layout', 'delete', 'edit']);

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

  .grid-item-container {
    box-sizing: border-box;
    padding: 16px;
    height: 100%;
  }

  .grid-item-content {
    height: calc(100% - 32px);

    &.full {
      height: 100%;
    }
  }

}
</style>