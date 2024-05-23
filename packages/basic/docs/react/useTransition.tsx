import { Tabs } from 'antd';
import React, { useState, useTransition } from 'react';

export default () => {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('key1');

  return (
    <>
      {isPending?.toString()}
      <Tabs
        activeKey={tab}
        items={[
          { key: 'key1', label: 'label1', children: 'children1' },
          { key: 'key2', label: 'label2', children: 'children2' },
        ]}
        onChange={v => {
          startTransition(() => {
            setTab(v);
          });
        }}
      />
    </>
  );
};
