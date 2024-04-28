import { DataFrame } from '@antv/ava';
import { Descriptions, Flex } from 'antd';
import React from 'react';

const RenderDescriptions = ({ title, json }) => {
  return (
    <Descriptions column={1} title={title}>
      {Object.keys(json).map(label => (
        <Descriptions.Item key={label} label={label}>
          {JSON.stringify(json[label])}
        </Descriptions.Item>
      ))}
    </Descriptions>
  );
};
const DataDemo = () => {
  const df = new DataFrame([
    { a: 1, b: 4, c: 7 },
    { a: 2, b: 5, c: 8 },
    { a: 3, b: 6, c: 9 },
  ]);

  return (
    <Flex vertical>
      <Descriptions title="entry json">
        <Descriptions.Item>{`
        [
          { a: 1, b: 4, c: 7 },
          { a: 2, b: 5, c: 8 },
          { a: 3, b: 6, c: 9 },
        ]
      `}</Descriptions.Item>
      </Descriptions>

      <RenderDescriptions json={df} title="df" />
      <RenderDescriptions json={df.info()?.[0]} title="df.info().[0]" />
    </Flex>
  );
};

export default DataDemo;
