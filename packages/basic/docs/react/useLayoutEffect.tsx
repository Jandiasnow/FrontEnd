import { Space, Typography } from 'antd';
import React, { useLayoutEffect, useRef, useState } from 'react';

export default () => {
  const ref = useRef<HTMLDivElement>(null!);
  const [rect, setRect] = useState<DOMRect>();

  useLayoutEffect(() => {
    const r = ref.current.getBoundingClientRect();
    setRect(r);
  }, []);

  return (
    <Space ref={ref} style={{ width: '800px', height: '200px' }}>
      <Typography.Text>height: {rect?.height}</Typography.Text>
      <Typography.Text>width: {rect?.width}</Typography.Text>
    </Space>
  );
};
