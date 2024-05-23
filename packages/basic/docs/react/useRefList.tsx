import { Button, Input, Space } from 'antd';
import React, { useRef, useState } from 'react';

export default () => {
  const itemsRef = useRef<Map<any, any>>(null);
  const [catList] = useState([1, 2, 3]);

  const getMap = () => {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      return (itemsRef.current = new Map());
    }
    return itemsRef.current;
  };

  const getRefNode = cat => {
    const map = getMap();
    const node = map.get(cat);
    node.focus();
  };

  return (
    <Space>
      <Space>
        {catList.map(cat => (
          <Input
            key={cat}
            placeholder={`my name is ${cat}`}
            ref={node => {
              const map = getMap();
              map.set(cat, node);

              return () => {
                map.delete(cat);
              };
            }}
          ></Input>
        ))}
      </Space>
      <Button onClick={() => getRefNode(catList[1])}>Focus Node</Button>
    </Space>
  );
};
