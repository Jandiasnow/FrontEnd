import { Input, Space } from 'antd';
import { memo, useState } from 'react';

const MemoComponent = memo(({ name }) => {
  console.warn('Greeting was rendered at', new Date().toLocaleTimeString());
  return (
    <Space>
      {new Date().toLocaleTimeString()}: {name || '-'}
    </Space>
  );
});

export default function MyApp() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  return (
    <Space>
      <Input onChange={e => setName(e.target.value)} placeholder="Name" value={name} />
      <Input onChange={e => setAddress(e.target.value)} placeholder="Address" value={address} />
      <MemoComponent name={name} />
    </Space>
  );
}
