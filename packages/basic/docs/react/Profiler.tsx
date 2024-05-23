import { Tabs } from 'antd';
import React, { Profiler, useState } from 'react';

export default () => {
  const [tab, setTab] = useState('key1');
  return (
    <Profiler
      id="tabs"
      onRender={(...params) => {
        console.warn('<Profiler>:', params);
      }}
    >
      <Tabs
        activeKey={tab}
        items={[
          { key: 'key1', label: 'label1', children: 'children1' },
          { key: 'key2', label: 'label2', children: 'children2' },
        ]}
        onChange={v => {
          setTab(v);
        }}
      />
    </Profiler>
  );
};
