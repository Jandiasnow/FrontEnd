import { Space, Spin } from 'antd';
import React, { Suspense } from 'react';

export default () => {
  return (
    <Suspense fallback={<Spin spinning={true}>loading</Spin>}>
      <Space>
        wrapper
        <Suspense fallback={<Spin spinning={true}>loading1</Spin>}>info</Suspense>
      </Space>
    </Suspense>
  );
};
