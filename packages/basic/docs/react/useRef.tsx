import { Button, Input, InputRef, Space } from 'antd';
import React, { useRef } from 'react';

export default () => {
  const inputRef = useRef<InputRef>(null!);

  const handleClick = () => {
    inputRef?.current?.focus();
  };

  return (
    <Space>
      <Input ref={inputRef} />
      <Button onClick={handleClick}>Focus the input</Button>
    </Space>
  );
};
