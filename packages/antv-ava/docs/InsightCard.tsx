import { getInsights } from '@antv/ava';
import { InsightCard } from '@antv/ava-react';
import React from 'react';

const data = [
  { year: '2000', value: 1 },
  { year: '2001', value: -1 },
  { year: '2002', value: 2 },
  { year: '2003', value: -2 },
  { year: '2004', value: 7 },
  { year: '2005', value: 3 },
  { year: '2006', value: -3 },
  { year: '2007', value: 0 },
  { year: '2008', value: 0 },
  { year: '2009', value: 1 },
];

const firstInsight = getInsights(data).insights[0];

const InsightCardDemo = () => {
  return <InsightCard insightInfo={firstInsight} visualizationOptions={{ lang: 'zh-CN' }} />;
};
export default InsightCardDemo;
