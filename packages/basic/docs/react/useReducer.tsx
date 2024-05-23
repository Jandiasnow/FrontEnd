import { Button, Space } from 'antd';
import React, { useReducer } from 'react';

// use
const tasksReducer = (tasks, action: { type: 'changed'; task: any }) => {
  switch (action.type) {
    case 'changed': {
      return tasks.map(t => {
        return t.id === action.task.id
          ? { ...action.task, change: (action.task.change || 0) + 1 }
          : t;
      });
    }
    default: {
      throw new Error('Unknown action: ' + action.type);
    }
  }
};
const initData = [{ id: 0, text: 'Visit Kafka Museum', done: true }];

export default () => {
  const [tasks, dispatch] = useReducer(tasksReducer, initData);
  return (
    <Space direction="vertical">
      <Button
        onClick={() => {
          // use
          dispatch({
            type: 'changed',
            task: tasks[0],
          });
        }}
      >
        change
      </Button>
      <code>{JSON.stringify(tasks)}</code>
    </Space>
  );
};
