import { Button, Space, Typography } from 'antd';
import React, { useId, useState } from 'react';
import { createPortal } from 'react-dom';

const ModalContent = ({ onClose }) => {
  return (
    <Space style={{ border: '1px solid #ccc', padding: '24px', borderRadius: '4px' }}>
      <Typography.Text>modal content</Typography.Text>
      <Button onClick={() => onClose()}>close</Button>
    </Space>
  );
};

export default () => {
  const [showModal, setShowModal] = useState(false);
  const domId = useId();

  return (
    <Space>
      <Button onClick={() => setShowModal(true)}>Show modal using a portal</Button>

      <div id={domId}></div>

      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.querySelector("[id=':r3:']") as any
        )}
    </Space>
  );
};
