import { Checkbox, Space, Spin } from 'antd';
import { Suspense, lazy, useState } from 'react';

const delayForDemo = promise => {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
};

const LazyComponent = lazy(() => delayForDemo(import('./lazyComponent.tsx')));

export default () => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <Space>
      <Checkbox onChange={e => setShowPreview(e.target.checked)} value={showPreview}>
        Show preview
      </Checkbox>
      {showPreview && (
        <Suspense fallback={<Spin spinning={true} />}>
          Preview:
          <LazyComponent />
        </Suspense>
      )}
    </Space>
  );
};
