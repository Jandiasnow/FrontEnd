import * as RecogitoJs from '@recogito/recogito-js';
import '@recogito/recogito-js/dist/recogito.min.css';
import { Button, Checkbox, Select, Space } from 'antd';
import React, { useEffect, useState } from 'react';

export default () => {
  console.warn(RecogitoJs, 'recogitorecogitorecogito');
  const [recogito, setRecogito] = useState() as any;
  const myAnnotation = {
    '@context': 'http://www.w3.org/ns/anno.jsonld',
    'id': 'https://www.example.com/recogito-js-example/foo',
    'type': 'Annotation',
    'body': [
      {
        type: 'TextualBody',
        value: 'This annotation was added via JS.',
      },
    ],
    'target': {
      selector: [
        {
          type: 'TextQuoteSelector',
          exact: 'that ingenious hero',
        },
        {
          type: 'TextPositionSelector',
          start: 38,
          end: 57,
        },
      ],
    },
  };

  useEffect(() => {
    const r = RecogitoJs.init({
      content: 'content', // Element id or DOM node to attach to
      locale: 'auto',
      allowEmpty: true,
      widgets: [
        { widget: 'COMMENT' },
        { widget: 'TAG', vocabulary: ['Place', 'Person', 'Event', 'Organization', 'Animal'] },
      ],
      relationVocabulary: ['isRelated', 'isPartOf', 'isSameAs '],
    });

    r.loadAnnotations('annotations.w3c.json').then(() => console.warn('loaded'));

    r.on('selectAnnotation', function (a) {
      console.warn('selected', a);
    });

    r.on('createAnnotation', function (a) {
      console.warn('created', a);
    });

    r.on('updateAnnotation', function (annotation, previous) {
      console.warn('updated', previous, 'with', annotation);
    });

    r.on('cancelSelected', function (annotation) {
      console.warn('cancel', annotation);
    });
    setRecogito(r);
  }, []);
  return (
    <>
      <Space>
        <Button
          onClick={() => {
            recogito?.addAnnotation(myAnnotation);
          }}
        >
          Add Annotation
        </Button>
        <Button
          onClick={() => {
            recogito?.addAnnotation(
              Object.assign({}, myAnnotation, {
                body: [
                  {
                    type: 'TextualBody',
                    value: 'This annotation was added via JS, and has been updated now.',
                  },
                ],
                target: {
                  selector: [
                    {
                      type: 'TextQuoteSelector',
                      exact: 'ingenious hero who',
                    },
                    {
                      type: 'TextPositionSelector',
                      start: 43,
                      end: 61,
                    },
                  ],
                },
              })
            );
          }}
        >
          Update Annotation
        </Button>
        <Button
          onClick={() => {
            recogito?.removeAnnotation(myAnnotation);
          }}
        >
          Remove Annotation
        </Button>
        <Button
          onClick={() => {
            recogito.selectAnnotation('#d7197c87-b45d-4217-9c4f-27573030448f');
          }}
        >
          Select Annotation
        </Button>
        <Select defaultValue="ANNOTATION" onChange={v => recogito.setMode(v)}>
          <Select.Option value="RELATIONS">MODE: RELATIONS</Select.Option>
          <Select.Option value="ANNOTATION">MODE: ANNOTATION</Select.Option>
        </Select>
        <Checkbox
          onChange={e => {
            recogito.readOnly = e.target.checked;
          }}
        >
          Read Only
        </Checkbox>
      </Space>
      <div id="outer-container">
        <div className="plaintext" id="content">
          <h1>Homer: The Odyssey</h1>
          <p>
            <strong>Tell me, O muse,</strong> of that ingenious hero who travelled far and wide
            after he had sacked the famous town of Troy. Many cities did he visit, and many were the
            nations with whose manners and customs he was acquainted; moreover he suffered much by
            sea while trying to save his own life and bring his men safely home; but do what he
            might he could not save his men, for they perished through their own sheer folly in
            eating the cattle of the Sun-god Hyperion; so the god prevented them from ever reaching
            home. Tell me, too, about all these things, O daughter of Jove, from whatsoever source
            you may know them.
          </p>
          <p>
            <strong>So now all who escaped death in battle</strong> or by shipwreck had got safely
            home except Ulysses, and he, though he was longing to return to his wife and country,
            was detained by the goddess Calypso, who had got him into a large cave and wanted to
            marry him. But as years went by, there came a time when the gods settled that he should
            go back to Ithaca; even then, however, when he was among his own people, his troubles
            were not yet over; nevertheless all the gods had now begun to pity him except Neptune,
            who still persecuted him without ceasing and would not let him get home.
          </p>
        </div>
      </div>
    </>
  );
};
