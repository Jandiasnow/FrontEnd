import { Typography } from 'antd';
import React, { useId } from 'react';

export default () => {
  const id = useId();
  return <Typography.Text id={`${id}-id`}>{id}</Typography.Text>;
};
