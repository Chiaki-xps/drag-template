<template>
  <div class="app">
    <tpl-items @add-item="handleAdd" />

    <div id="screen-container" class="screen-container">
      <div class="tpl-operation">
        <c-icon name="view" />
        <c-icon name="save" />
      </div>

      <div id="screen-content" class="screen-content">
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
import tplItems from '@/view/tpl-items/index.vue';
import pageTemplate from '@/view/page-template/index.vue';
import { getUuid } from '@/utils/index';
import { gridLayoutConfig } from '@/config/config.js';

const layout = reactive({
  list: [], // 布局
  history: [], // 历史记录
  index: 0, // 历史记录索引
  active: -1, // 编辑激活项,
  showEdit: false, // 显示编辑抽屉
  editItem: {}, // 编辑的item
});

const handleAdd = ({ item, x, y }) => {
  const { list } = layout;
  // 生成一个唯一的id
  const i = getUuid();

  // 如果返回的x,y为0，做处理
  if (!x && !y && list.length) {
    // 找到最后一个
    const last = layout.list
      .sort((a, b) => a.x - b.x)
      .sort((a, b) => a.y - b.y)
      .slice(-1)[0];
    x = last.x + last.w + item.w > gridLayoutConfig.colNum ? 0 : last.x + last.w;
    y = last.y + last.h;
  }

  layout.list = [...list, { ...item, x, y, i }];

  console.log(layout.list);

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
      height: calc(100% - 96px);
      padding-top: 10px;
    }
  }
}
</style>
