import { Advisor } from '@antv/ava';
import { Flex } from 'antd';
import React from 'react';

import Chart from './Chart';

const AdvisorDemo = () => {
  const data = [
    { price: 100, type: 'A' },
    { price: 120, type: 'B' },
    { price: 150, type: 'C' },
  ];

  const myChartAdvisor = new Advisor();

  const adviseResults = myChartAdvisor.advise({ data });

  return (
    <Flex justify="space-around">
      {adviseResults?.map(advise => (
        <Flex key={advise.type} vertical={true}>
          <div>类型：{advise.type}</div>
          <Chart options={advise.spec} />
        </Flex>
      ))}
    </Flex>
  );
};
export default AdvisorDemo;
