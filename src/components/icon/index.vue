<!-- icon组件 -->
<template>
  <el-button class="icon-button c-icon" link>
    <el-icon :color="color">
      <custom-icon :el-name="elName" :name="name" :src="src" />
    </el-icon>
  </el-button>
</template>

<script setup>
import customIcon from './components/index.vue';

const props = defineProps({
  name: { type: String, default: '', },
  size: { type: [Number, String], default: 22 },
  elName: { type: String },
  color: { type: String, default: '#8494ab' },
  src: { type: String },
});

const { name, color, size } = toRefs(props);

const fontSize = computed(() => {
  const number = parseInt(size.value);
  return isNaN(number) ? '22px' : `${number}px`;
});

</script>

<style lang="scss" scoped>
.el-button.icon-button {
  border-radius: 0;
  border: none;
  padding: 0;
}

.el-icon {
  font-style: normal;
  font-size: v-bind(fontSize);
}

img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>