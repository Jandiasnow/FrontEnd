import { Space } from 'antd';
import React, { useSyncExternalStore } from 'react';

const subscribe = callback => {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
};

const useOnlineStatus = () => {
  // ✅ Good: Subscribing to an external store with a built-in Hook
  return useSyncExternalStore(
    subscribe, // React won't resubscribe for as long as you pass the same function
    () => navigator.onLine, // How to get the value on the client
    () => true // How to get the value on the server
  );
};

export default () => {
  const isOnline = useOnlineStatus();
  return <Space>{isOnline && isOnline.toString()}</Space>;
};
