import { tableData } from './mock-data';

const pieChart = [
  {
    label: '基础饼图',
    type: 'pie',
    data: tableData,
    config: { colorField: 'key', angleField: 'value' },
    w: 4,
    h: 4,
    img: 'chart-pie',
  },
  {
    label: '基础饼图',
    type: 'pie',
    data: tableData,
    config: { colorField: 'key', angleField: 'value', innerRadius: 0.5 },
    w: 4,
    h: 4,
    img: 'chart-pie-ring',
  }
];

// 条形图
const barChart = [
  {
    label: '基础条形图',
    type: 'bar',
    data: tableData,
    config: { xField: 'value', yField: 'key' },
    w: 4,
    h: 4,
    img: 'chart-bar',
  },
  {
    label: '基础条形图',
    type: 'bar',
    data: tableData,
    config: { xField: 'value', yField: 'key', seriesField: 'type', isStack: true, },
    w: 4,
    h: 4,
    img: 'chart-bar-stack',
  },
];

export const chartItemList = [
  { title: '饼图', list: pieChart },
  { title: '条形图', list: barChart },
  // { title: '折线图', list: lineChart },
  // { title: '柱形图', list: columnChart },
];