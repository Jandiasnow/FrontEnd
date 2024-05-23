import { Button, Space, Typography } from 'antd';
import React, { useState } from 'react';

export default () => {
  const [number, setNumber] = useState(0);
  return (
    <Space>
      <Typography.Text>{number}</Typography.Text>
      <Button
        onClick={() => {
          // use
          setNumber(n => n + 1);
          setNumber(n => n + 1);
          setNumber(n => n + 1);
        }}
      >
        +3
      </Button>
    </Space>
  );
};
