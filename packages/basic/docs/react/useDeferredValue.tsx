import { Input, Space, Typography } from 'antd';
import React, { useDeferredValue, useState } from 'react';

export default () => {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const isStale = query !== deferredQuery;
  return (
    <Space>
      <Input onChange={e => setQuery(e.target.value)} value={query} />
      <Typography.Text
        style={{
          opacity: isStale ? 0.1 : 1,
        }}
      >
        {deferredQuery}
      </Typography.Text>
    </Space>
  );
};
