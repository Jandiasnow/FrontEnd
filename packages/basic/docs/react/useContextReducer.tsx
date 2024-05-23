import { Button, Space } from 'antd';
import React, { createContext, useContext, useReducer } from 'react';

// use reducer create context
const initialTasks = [{ id: 0, text: 'Philosopher’s Path', done: true }];

type Dispatch = React.Dispatch<{ type: 'changed'; task: (typeof initialTasks)[0] }>;

const TasksContext = createContext(initialTasks);
const TasksDispatchContext = createContext<Dispatch>(null!);

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

export const TasksProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>{children}</TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
};

// use func
export const useTasks = () => {
  return useContext(TasksContext);
};
export const useTasksDispatch = () => {
  return useContext(TasksDispatchContext);
};

// use
const Child = () => {
  const dispatch = useTasksDispatch();
  const tasks = useTasks();
  return (
    <Space direction="vertical">
      <Button
        onClick={() => {
          dispatch({
            type: 'changed',
            task: tasks?.[0],
          });
        }}
      >
        change
      </Button>
      <code>{JSON.stringify(tasks)}</code>
    </Space>
  );
};
export default () => {
  return (
    <TasksProvider>
      <Child />
    </TasksProvider>
  );
};
