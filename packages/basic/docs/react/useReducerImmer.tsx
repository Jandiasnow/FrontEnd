import { Button, Space } from 'antd';
import React from 'react';
import { useImmerReducer } from 'use-immer';

const tasksReducer = (draft, action: { type: 'changed' }) => {
  switch (action.type) {
    case 'changed': {
      // use
      draft[0].id = draft[0].id + 1;
      break;
    }
    default: {
      throw new Error('Unknown action: ' + action.type);
    }
  }
};
const initData = [{ id: 0, text: 'Visit Kafka Museum', done: true }];

export default () => {
  const [tasks, dispatch] = useImmerReducer(tasksReducer, initData);
  return (
    <Space direction="vertical">
      <Button
        onClick={() => {
          dispatch({
            type: 'changed',
          });
        }}
      >
        change
      </Button>
      <code>{JSON.stringify(tasks)}</code>
    </Space>
  );
};
