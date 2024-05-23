// //7. useEffectEvent hook
// import { useEffect, useEffectEvent } from 'react';
// // ...

// export function useChatRoom({ serverUrl, roomId, onReceiveMessage }) {
//   const onMessage = useEffectEvent(onReceiveMessage);

//   useEffect(() => {
//     const options = {
//       serverUrl: serverUrl,
//       roomId: roomId
//     };
//     const connection = createConnection(options);
//     connection.connect();
//     connection.on('message', (msg) => {
//       onMessage(msg);
//     });
//     return () => connection.disconnect();
//   }, [roomId, serverUrl]); // ✅ All dependencies declared
// }
export default () => 1;
