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
        <div class="drawer-title">
          <slot name="title">{{ $attrs.title }}</slot>
        </div>
        <c-icon
          name="close"
          size="18"
          :title="false"
          @click="closeDrawer"
        />
      </div>

      <div class="drawer-content-wrapper">

        <div class="drawer-content" :style="{ height: `calc(100% - ${footerHeight}px)` }">
          <el-scrollbar>
            <slot />
          </el-scrollbar>
        </div>

        <div class="drawer-footer" ref="refFooter">
          <slot name="footer" />
        </div>

      </div>

    </div>

  </el-drawer>
</template>

<script setup>

const emit = defineEmits(['update:show', 'close']);

defineProps({
  show: { type: Boolean, required: true, default: false },
  // scroll: { type: Boolean, required: false, default: true }
});

const refFooter = ref(null);

const footerHeight = computed(() => {
  const client = refFooter.value?.getBoundingClientRect?.();
  return Math.ceil(client?.height ?? 25);
});

const closeDrawer = () => {
  emit('update:show', false);
  emit('close');
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

  .drawer-content-wrapper {
    box-sizing: border-box;
    height: calc(100% - 56px);
  }

  // .drawer-content {
  //   padding: 24px;
  //   box-sizing: border-box;
  // }

  .drawer-title-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    font-weight: 700;
    height: 56px;
    padding: 16px 24px;
    box-sizing: border-box;
    background-color: #f8f9fa;
    color: #141b2b;
  }

  .drawer-title {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
  }

  .drawer-footer {
    border-top: 1px solid var(--divider-color);
    padding: 12px 24px;
  }
}
</style>