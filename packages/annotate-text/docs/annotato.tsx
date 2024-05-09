import useAnnotato from 'annotato/hooks/useAnnotato';
import { Button } from 'antd';
import React from 'react';

const dummyText = 'This is a text that will be annotated.';

const dummyAnnotations = [
  {
    id: 'someId',
    labelId: 'test',
    startOffset: 0,
    endOffset: 4,
  },
];

const dummyLabels = [
  {
    id: 'test',
    color: '#444999',
  },
];

export default () => {
  const [Annotato, annotations] = useAnnotato({
    mode: 'edit',
    text: dummyText,
    annotations: dummyAnnotations,
    labels: dummyLabels,
    onClick: (annotation, e) => console.warn('CLICK', annotation, e),
    onMouseEnter: (annotation, e) => console.warn('HOVER', annotation, e),
  });

  return (
    <div className="App">
      <div style={{ maxWidth: '50%', textAlign: 'justify', margin: '0 auto' }}>
        <Annotato />
        <Button
          onClick={() => {
            console.warn(annotations);
          }}
        >
          Click
        </Button>
      </div>
    </div>
  );
};
