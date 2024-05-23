import { Space } from 'antd';
import React, { StrictMode, useState } from 'react';

let initialStories = [
  { id: 0, label: "Ankit's Story" },
  { id: 1, label: "Taylor's Story" },
];

export default function App() {
  let [stories] = useState(initialStories);
  const [isHover, setIsHover] = useState(false);
  const items = stories as any;
  items.push({ id: 'create', label: 'Create Story' });

  return (
    <StrictMode>
      <Space
        onPointerEnter={() => setIsHover(true)}
        onPointerLeave={() => setIsHover(false)}
        style={{
          backgroundColor: isHover ? '#ddd' : '#fff',
        }}
      >
        {items.map(story => (
          <li
            key={story.id}
            style={{ border: '1px solid #ddd', borderRadius: '4px', padding: '24px' }}
          >
            {story.label}
          </li>
        ))}
      </Space>
    </StrictMode>
  );
}
