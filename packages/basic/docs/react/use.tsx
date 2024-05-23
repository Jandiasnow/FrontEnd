import { Button, Space } from 'antd';
import { createContext, use, useState } from 'react';

const ThemeContext = createContext('theme');

const Content = () => {
  const [show, setShow] = useState();
  let theme = 'default';
  if (show) {
    theme = use(ThemeContext);
  }
  return (
    <Space>
      {theme}
      <Button onClick={() => setShow(!show)}>show</Button>
    </Space>
  );
};

export default () => {
  return (
    <ThemeContext.Provider value="dark">
      <Content />
    </ThemeContext.Provider>
  );
};
