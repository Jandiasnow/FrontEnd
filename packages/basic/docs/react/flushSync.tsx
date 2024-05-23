import { Button, Input, Space } from 'antd';
import React, { useState } from 'react';
import { flushSync } from 'react-dom';

export default () => {
  const [text, setText] = useState('init');

  const handleChange = () => {
    flushSync(() => {
      setText('change');
    });
  };

  return (
    <Space>
      {text}
      <Button onClick={handleChange}>Change</Button>
      <Input onChange={e => setText(e.target.value)} value={text} />
    </Space>
  );
};
