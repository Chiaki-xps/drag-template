import { Line, Column, Bar, Pie, Gauge, Scatter, RadialBar, Area } from '@antv/g2plot';
import { firstUpperCase } from '@/utils/index.js';

const defaultConfig = {
  autoFit: true
};

export default class Chart {
  constructor({ container, type, config, data }) {
    this.container = container;
    this.config = { ...defaultConfig, ...config, data };
    this.chart = null;
    this.create(firstUpperCase(type));
  }

  create(type) {
    if (['Line', 'Column', 'Bar', 'Pie', 'Gauge', 'Scatter', 'RadialBar', 'Area'].includes(type)) {
      this[`create${type}`]();
    }
  }

  // 折线图
  createLine() {
    this.chart = new Line(this.container, this.config);
    this.render();
  }

  // 柱状图
  createColumn() {
    this.chart = new Column(this.container, this.config);
    this.render();
  }

  // 条形图
  createBar() {
    this.chart = new Bar(this.container, this.config);
    this.render();
  }

  // 饼图
  createPie() {
    this.chart = new Pie(this.container, this.config);
    this.render();
  }

  // 仪表盘
  createGauge() {
    this.chart = new Gauge(this.container, this.config);
    this.render();
  }

  // 散点图
  createScatter() {
    this.chart = new Scatter(this.container, this.config);
    this.render();
  }

  // 玉珏图
  createRadialBar() {
    this.chart = new RadialBar(this.container, this.config);
    this.render();
  }

  // 面积图
  createArea() {
    this.chart = new Area(this.container, this.config);
    this.render();
  }

  render() {
    this.chart.render();
  }

  update(options) {
    this.chart.update(options);
  }

  changeData(data) {
    this.chart.changeData(data);
  }

  addAnnotations(annotations) {
    this.chart.addAnnotations(annotations);
  }

  /**
     *
     * @param {array} annotations id集合： [{id:xxx}]
     */
  removeAnnotations(annotations) {
    this.chart.removeAnnotations(annotations);
  }

  destroy() {
    this.chart?.destroy();
  }
}
