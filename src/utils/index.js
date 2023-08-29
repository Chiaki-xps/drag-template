/**
 * @returns {string}
 * @desc 获取唯一id
 */
export function getUuid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return (
    s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
  );
}

/**
 * 首字母大写
 * @param {string} text
 * @returns
 */
export function firstUpperCase(text) {
  if (typeof text !== 'string') {
    return '';
  }
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}
