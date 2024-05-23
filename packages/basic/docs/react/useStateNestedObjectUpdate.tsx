import { Input, Space } from 'antd';
import React from 'react';
import { useImmer } from 'use-immer';

export default () => {
  const [person, updatePerson] = useImmer({
    meta: {
      name: 'Niki de Saint Phalle',
    },
  });

  function handleNameChange(e) {
    updatePerson(draft => {
      // use
      draft.meta.name = e.target.value;
    });
  }

  return (
    <Space direction="vertical">
      <Input onChange={handleNameChange} placeholder="name" value={person.meta.name} />
      <p>{person.meta.name}</p>
    </Space>
  );
};
