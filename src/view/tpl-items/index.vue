<template>
  <div class="tpl-items">
    <el-scrollbar class="hidden-bottom-bar out-right-bar">
      <template v-for="(group, index) in chartItemList" :key="index">
        <div class="group-wrapper" :class="{ shrink: shrinkList.includes(index) }">
          <div class="group-title" @click="handleToggle(index)">
            <c-icon name="arrow-down" size="8" />
            <p class="title">{{ group.title }}</p>
          </div>
        </div>

        <div class="group-list">
          <el-row justify="space-between" :gutter="10">
            <template v-for="(item, idx) in group.list" :key="idx">
              <el-col :span="12">
                <div
                  class="item"
                  draggable="true"
                  @dragend="handleDrag($event, item)"
                  @click="handleClick(item)"
                >
                  <div class="label">
                    {{ item.label }}
                  </div>
                  <img class="img" :src="getAssetsFile(`tpl-thumb/${item.img}.png`)" alt="" />
                </div>
              </el-col>
            </template>
          </el-row>
        </div>

      </template>

    </el-scrollbar>
  </div>
</template>

<script setup>
import { chartItemList } from '@/config/index';

// 收起列表
const shrinkList = ref([]);

const handleToggle = index => {
  if (shrinkList.value.includes(index)) {
    shrinkList.value = shrinkList.value.filter(item => item !== index);
  } else {
    shrinkList.value.push(index);
  }
};

// 拖拽新增
const handleDrag = ({ x, y }, item) => {
  if (mouseInGridContainer(x, y)) {
    // const position = transformPosition(x, y, item.w);
    // emit('add-item', { item, ...position });
  }
};

// 检测拖拽有效区域
const mouseInGridContainer = (x, y) => {
  const rect = gridContainerRect();
  // if (rect) {
  //   const { left, right, top, bottom } = rect;
  //   return x > left && x < right && y > top && y < bottom;
  // }
  // return false;
};

const gridContainerRect = () => {
  const container = document.querySelector('#screen-container');
  if (container) {
    console.log(container.getBoundingClientRect());
    return container.getBoundingClientRect();
  }
  // return false;
};

const handleClick = () => {

};

// 获取静态文件
const getAssetsFile = url => {
  return new URL(`../../assets/${url}`, import.meta.url).href;
};

</script>

<style lang="scss" scoped>
.tpl-items {
  padding: 16px;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 14px;
  margin-right: 25px;
  width: 250px;

  .group-wrapper {
    // max-height: 560px;
    overflow: hidden;
    transition: all .5s linear;

    :deep(.el-icon) {
      transition: all .25s linear;

      transform: rotate(0);
    }

    &.shrink {
      max-height: 24px;

      :deep(.el-icon) {
        transform: rotate(-90deg);
      }
    }

    .group-title {
      display: flex;
      align-items: center;
      cursor: pointer;

      .title {
        margin: 0 0 0 8px;
        height: 24px;
        line-height: 24px;
        font-size: 14px;
        color: #141b2b;
      }
    }
  }

  .group-list {

    .item {
      text-align: center;
      overflow: hidden;
      margin: 8px 0;
      border: 1px solid #e2e5e8;
      border-radius: 10px;
      margin: 8px 0;

      .label {
        padding: 6px 0;
        background: #eceffe;
      }

      img {
        width: 100%;
      }

    }

  }

}
</style>