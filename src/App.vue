<template>
  <div class="app">
    <tpl-items @add-item="handleAdd" />

    <div id="screen-container" class="screen-container">
      <div class="tpl-operation">
        <c-icon name="view" />
        <c-icon name="save" />
      </div>

      <div class="screen-content">
        <el-scrollbar>
          <page-template
            v-model:active="layout.active"
            v-model:layout="layout.list"
            editor
          />
        </el-scrollbar>
      </div>
    </div>
  </div></template>

<script setup>
import tplItems from './view/tpl-items/index.vue';
import pageTemplate from '@/view/page-template/index.vue';

const layout = reactive({
  list: [], // 布局
  history: [], // 历史记录
  index: 0, // 历史记录索引
  active: -1, // 编辑激活项,
  showEdit: false, // 显示编辑抽屉
  editItem: {}, // 编辑的item
});

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

  .screen-container {
    flex: 1;

    .tpl-operation {
      display: flex;
      width: fit-content;
      padding: 8px 16px;
      background: #fff;
      border-radius: 14px;
      margin-left: 10px;
      font-size: 20px;

      .el-button {
        margin: 0 10px;
        padding: 0;
        border: 0;
      }

      :deep(.el-icon) {
        color: #545965;
        font-size: 22px;
      }
    }

    .screen-content {
      height: calc(100% - 48px);
      padding-top: 10px;
    }
  }
}
</style>
