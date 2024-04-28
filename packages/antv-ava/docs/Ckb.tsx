import { ckb } from '@antv/ava';
import { Card, Descriptions, Flex } from 'antd';
import React from 'react';

const ckbInfo = ckb();

const CkbDemo = () => {
  return (
    <Flex gap="middle" wrap="wrap">
      {Object.keys(ckbInfo).map(key => {
        const chart = ckbInfo[key];
        return (
          <Card
            key={key}
            style={{ width: '23%', height: 350, overflowY: 'auto' }}
            title={chart.name}
          >
            <Descriptions column={1}>
              {Object.keys(chart).map(label => (
                <Descriptions.Item key={label} label={label}>
                  {JSON.stringify(chart[label])}
                </Descriptions.Item>
              ))}
            </Descriptions>
          </Card>
        );
      })}
    </Flex>
  );
};

export default CkbDemo;
