import React from 'react';
import NLPAnnotator from 'react-nlp-annotate';

const labels = [
  {
    id: 'gryffindor',
    displayName: 'Gryffindor',
    description: 'Daring, strong nerve and chivalry.',
  },
  {
    id: 'slytherin',
    displayName: 'Slytherin',
    description: 'Cunning and ambitious. Possibly dark wizard.',
  },
];

export default () => {
  return (
    <div id="root">
      <NLPAnnotator
        hotkeysEnabled
        // Try changing to any of these!
        // type="label-document"
        document="Harry was an honest to god good man"
        multipleLabels={false}
        type="label-sequence"
        // type="label-relationships"
        labels={labels}
        onChange={output => {
          console.warn('Output is...', output);
        }}
        // this is just for label-relationships
        // entityLabels={labels}
        // relationshipLabels={labels}
      />
    </div>
  );
};
