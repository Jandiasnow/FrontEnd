import { useOptimistic, useRef, useState } from 'react';

const deliverMessage = async message => {
  await new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
  return message;
};

export default () => {
  const formRef = useRef<HTMLFormElement>(null!);

  const [messages, setMessages] = useState<
    {
      text: string;
      sending?: boolean;
      key?: number;
    }[]
  >([{ text: 'Hello there!', sending: false, key: 1 }]) as any;

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      {
        text: newMessage,
        sending: true,
      },
    ]
  );
  async function formAction(formData) {
    addOptimisticMessage(formData.get('message'));
    formRef.current.reset();
    const sentMessage = await deliverMessage(formData.get('message'));
    setMessages(messages => [...messages, { text: sentMessage }]);
  }

  return (
    <>
      {optimisticMessages.map((message, index) => (
        <div key={index}>
          {message.text}
          {!!message.sending && <small> (Sending...)</small>}
        </div>
      ))}
      <form action={formAction} ref={formRef}>
        <input name="message" placeholder="Hello!" type="text" />
        <button type="submit">Send</button>
      </form>
    </>
  );
};
