import { NarrativeTextVis, NtvPluginManager, createCustomBlockFactory } from '@antv/ava-react';
import type { NarrativeTextSpec } from '@antv/ava-react';
import React from 'react';

import Chart from './Chart';

const SALES_BY_AREA = [
  { month: '2020-01', value: 2_681_567, count: 1 },
  { month: '2020-02', value: 4_137_415, count: 1234 },
  { month: '2020-03', value: 4_684_506 },
  { month: '2020-04', value: 2_447_301 },
  { month: '2020-05', value: 815_039 },
  { month: '2020-06', value: 1_303_124 },
];

const textSpec = {
  sections: [
    {
      paragraphs: [
        {
          type: 'normal',
          phrases: [
            { type: 'entity', value: '销量', metadata: { entityType: 'metric_name' } },
            { type: 'text', value: ' ' },
            { type: 'entity', value: '1.23亿', metadata: { entityType: 'metric_value' } },
            { type: 'text', value: '，环比昨日' },
            {
              type: 'entity',
              value: '50万',
              metadata: { entityType: 'delta_value', assessment: 'positive' },
            },
            { type: 'text', value: '。' },
          ],
          styles: {
            marginBottom: 24,
          },
        },
        // step1: 自定义块级元素 customType metadata
        {
          customType: 'line',
          value: {
            type: 'view',
            autoFit: true,
            data: SALES_BY_AREA,
            encode: { x: 'month', y: 'value' },
            scale: { x: { range: [0, 1] }, y: { domainMin: 0, nice: true } },
            children: [
              { type: 'line', labels: [{ text: 'value', style: { dx: -10, dy: -12 } }] },
              { type: 'point', style: { fill: 'white' }, tooltip: false },
            ],
          },
        },
      ],
    },
  ],
} as NarrativeTextSpec;

const pluginManager = new NtvPluginManager([
  // step2: 通过 createCustomBlockFactory 声明自定义元素的表现方式
  createCustomBlockFactory({
    key: 'line',
    render(metadata) {
      if (metadata?.value) return <Chart height={300} options={metadata.value} width={900} />;
      return null;
    },
  }),
]);

const NtvDemo = () => {
  return (
    <NarrativeTextVis
      // step3: 将插件传入组件
      pluginManager={pluginManager}
      spec={textSpec}
    />
  );
};

export default NtvDemo;
