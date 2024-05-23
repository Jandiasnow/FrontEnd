import { Button, Input, InputRef, Space } from 'antd';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';

// create
interface MyInputRef {
  focus: () => void;
}
interface MyInputProps {
  test?: string;
}
const MyInput = forwardRef<MyInputRef, MyInputProps>((props, ref) => {
  const realInputRef = useRef<InputRef>(null!);
  useImperativeHandle(ref, () => ({
    // Only expose focus and nothing else
    focus() {
      realInputRef.current.focus();
    },
  }));
  return <Input {...props} ref={realInputRef} />;
});

// use
export default () => {
  const inputRef = useRef<MyInputRef>(null!);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <Space>
      <MyInput ref={inputRef} />
      <Button onClick={handleClick}>Focus the input</Button>
    </Space>
  );
};
