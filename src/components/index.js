// 批量组册组件
const files = import.meta.globEager('@/components/**/*.vue');
// 过滤不必全局注册的私有组件
const keys = Object.keys(files).filter(item => item.split('/').length < 6);

const components = [];

for (let path of keys) {
  //获取组件
  const component = files[path].default;
  // 获取组件名
  const reg = /(.*)\.vue$/;
  let names = path.match(reg)[1].split('/').filter(item => item && item !== 'index');

  const name = `c-${names[names.length - 1]}`;
  components.push({ name, component });
}

export default {
  install(Vue) {
    components.forEach(item => {
      Vue.component(item.name, item.component);
    });
  },
};