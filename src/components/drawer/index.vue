<template>
  <el-drawer
    append-to-body
    destroy-on-close
    :model-value="show"
    :close-on-click-modal="false"
    v-bind="$attrs"
    :show-close="false"
    :with-header="false"
    @close="closeDrawer"
  >
    <div class="drawer-container">
      <div class="drawer-title-wrapper">
        123
      </div>
    </div>

  </el-drawer>
</template>

<script setup>
defineProps({
  show: { type: Boolean, required: true, default: false },
  // scroll: { type: Boolean, required: false, default: true }
});

const closeDrawer = () => {
  console.log('closeDrawer');
};
</script>

<style lang="scss">
.el-drawer {
  width: 400px !important;
  border-radius: 40px 0 0 40px;
  background: #fff;
  box-shadow: -6px 0px 12px 0px rgba(0, 21, 41, 0.12);

  .el-drawer__body {
    padding: 0;
  }

  .drawer-container {
    height: 100%;
  }

  // .drawer-content-wrapper {
  //   box-sizing: border-box;
  //   height: calc(100% - 56px);
  // }

  // .drawer-content {
  //   padding: 24px;
  //   box-sizing: border-box;
  // }

  // .drawer-title-wrapper {
  //   @include flex;
  //   @include flex-between-center;
  //   @include font-18-bold;
  //   height: 56px;
  //   padding: 16px 24px;
  //   box-sizing: border-box;
  //   background-color: var(--sub-background-color);
  //   color: var(--title-color);
  // }

  // .drawer-title {
  //   @include flex;
  //   @include flex-grow;
  //   @include flex-between-center;
  //   padding-right: 20px;
  // }

  // .drawer-footer {
  //   border-top: 1px solid var(--divider-color);
  //   padding: 12px 24px;
  // }
}
</style>