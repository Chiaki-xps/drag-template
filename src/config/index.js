import { tableData } from './mock-data';

const pieChart = [
  {
    label: '基础饼图',
    data: tableData,
    config: { colorField: 'key', angleField: 'value' },
    w: 4,
    h: 4,
    img: 'chart-pie',
  }
];