import { AnnotationBody, Annotorious, useAnnotationStore, useAnnotator } from '@annotorious/react';
import {
  TextAnnotator,
  TextAnnotatorPopup,
  TextAnnotatorPopupProps,
} from '@recogito/react-text-annotator';
import {
  TextAnnotator as RecogitoTextAnnotator,
  TextAnnotation,
  W3CTextFormat,
} from '@recogito/text-annotator';
import { Button } from 'antd';
import React, { useCallback, useEffect } from 'react';

const TestPopup = (props: TextAnnotatorPopupProps) => {
  const store = useAnnotationStore();

  const anno = useAnnotator<RecogitoTextAnnotator>();

  const body: AnnotationBody = {
    id: `${Math.random()}`,
    annotation: props.selected[0].annotation.id,
    purpose: 'commenting',
    value: 'A Dummy Comment',
  };

  const onClick = () => {
    store.addBody(body);
    anno.state.selection.clear();
  };

  return (
    <div className="popup">
      <input type="text" />
      <Button onClick={onClick}>Close</Button>
    </div>
  );
};

const MockStorage = () => {
  const anno = useAnnotator<RecogitoTextAnnotator>();

  useEffect(() => {
    if (!anno) return;

    const handleCreateAnnotation = (annotation: TextAnnotation) =>
      console.warn('create', annotation);
    anno.on('createAnnotation', handleCreateAnnotation);

    const handleDeleteAnnotation = (annotation: TextAnnotation) =>
      console.warn('delete', annotation);
    anno.on('deleteAnnotation', handleDeleteAnnotation);

    const handleSelectionChanged = (annotations: TextAnnotation[]) =>
      console.warn('selection changed', annotations);
    anno.on('selectionChanged', handleSelectionChanged);

    const handleUpdateAnnotation = (annotation: TextAnnotation, previous: TextAnnotation) =>
      console.warn('update', annotation, previous);
    anno.on('updateAnnotation', handleUpdateAnnotation);

    return () => {
      anno.off('createAnnotation', handleCreateAnnotation);
      anno.off('deleteAnnotation', handleDeleteAnnotation);
      anno.off('selectionChanged', handleSelectionChanged);
      anno.off('updateAnnotation', handleUpdateAnnotation);
    };
  }, [anno]);

  return null;
};

export default () => {
  const w3cAdapter = useCallback(
    (container: HTMLElement) => W3CTextFormat('https://www.gutenberg.org', container),
    []
  );

  return (
    <Annotorious>
      <TextAnnotator adapter={w3cAdapter} annotationEnabled renderer="CSS_HIGHLIGHTS">
        <p>
          Tell me, O muse, of that ingenious hero who travelled far and wide after he had sacked the
          famous town of Troy. Many cities did he visit, and many were the nations with whose
          manners and customs he was acquainted; moreover he suffered much by sea while trying to
          save his own life and bring his men safely home; but do what he might he could not save
          his men, for they perished through their own sheer folly in eating the cattle of the
          Sun-god Hyperion; so the god prevented them from ever reaching home. Tell me, too, about
          all these things, O daughter of Jove, from whatsoever source you may know them.
        </p>

        <p>
          So now all who escaped death in battle or by shipwreck had got safely home except Ulysses,
          and he, though he was longing to return to his wife and country, was detained by the
          goddess Calypso, who had got him into a large cave and wanted to marry him. But as years
          went by, there came a time when the gods settled that he should go back to Ithaca; even
          then, however, when he was among his own people, his troubles were not yet over;
          nevertheless all the gods had now begun to pity him except Neptune, who still persecuted
          him without ceasing and would not let him get home.
        </p>

        <p>
          Tell me, O muse, of that ingenious hero who travelled far and wide after he had sacked the
          famous town of Troy. Many cities did he visit, and many were the nations with whose
          manners and customs he was acquainted; moreover he suffered much by sea while trying to
          save his own life and bring his men safely home; but do what he might he could not save
          his men, for they perished through their own sheer folly in eating the cattle of the
          Sun-god Hyperion; so the god prevented them from ever reaching home. Tell me, too, about
          all these things, O daughter of Jove, from whatsoever source you may know them.
        </p>

        <p>
          So now all who escaped death in battle or by shipwreck had got safely home except Ulysses,
          and he, though he was longing to return to his wife and country, was detained by the
          goddess Calypso, who had got him into a large cave and wanted to marry him. But as years
          went by, there came a time when the gods settled that he should go back to Ithaca; even
          then, however, when he was among his own people, his troubles were not yet over;
          nevertheless all the gods had now begun to pity him except Neptune, who still persecuted
          him without ceasing and would not let him get home.
        </p>

        <p>
          Tell me, O muse, of that ingenious hero who travelled far and wide after he had sacked the
          famous town of Troy. Many cities did he visit, and many were the nations with whose
          manners and customs he was acquainted; moreover he suffered much by sea while trying to
          save his own life and bring his men safely home; but do what he might he could not save
          his men, for they perished through their own sheer folly in eating the cattle of the
          Sun-god Hyperion; so the god prevented them from ever reaching home. Tell me, too, about
          all these things, O daughter of Jove, from whatsoever source you may know them.
        </p>

        <p>
          So now all who escaped death in battle or by shipwreck had got safely home except Ulysses,
          and he, though he was longing to return to his wife and country, was detained by the
          goddess Calypso, who had got him into a large cave and wanted to marry him. But as years
          went by, there came a time when the gods settled that he should go back to Ithaca; even
          then, however, when he was among his own people, his troubles were not yet over;
          nevertheless all the gods had now begun to pity him except Neptune, who still persecuted
          him without ceasing and would not let him get home.
        </p>

        <p>
          Tell me, O muse, of that ingenious hero who travelled far and wide after he had sacked the
          famous town of Troy. Many cities did he visit, and many were the nations with whose
          manners and customs he was acquainted; moreover he suffered much by sea while trying to
          save his own life and bring his men safely home; but do what he might he could not save
          his men, for they perished through their own sheer folly in eating the cattle of the
          Sun-god Hyperion; so the god prevented them from ever reaching home. Tell me, too, about
          all these things, O daughter of Jove, from whatsoever source you may know them.
        </p>

        <p>
          So now all who escaped death in battle or by shipwreck had got safely home except Ulysses,
          and he, though he was longing to return to his wife and country, was detained by the
          goddess Calypso, who had got him into a large cave and wanted to marry him. But as years
          went by, there came a time when the gods settled that he should go back to Ithaca; even
          then, however, when he was among his own people, his troubles were not yet over;
          nevertheless all the gods had now begun to pity him except Neptune, who still persecuted
          him without ceasing and would not let him get home.
        </p>

        <p>
          Tell me, O muse, of that ingenious hero who travelled far and wide after he had sacked the
          famous town of Troy. Many cities did he visit, and many were the nations with whose
          manners and customs he was acquainted; moreover he suffered much by sea while trying to
          save his own life and bring his men safely home; but do what he might he could not save
          his men, for they perished through their own sheer folly in eating the cattle of the
          Sun-god Hyperion; so the god prevented them from ever reaching home. Tell me, too, about
          all these things, O daughter of Jove, from whatsoever source you may know them.
        </p>

        <p>
          So now all who escaped death in battle or by shipwreck had got safely home except Ulysses,
          and he, though he was longing to return to his wife and country, was detained by the
          goddess Calypso, who had got him into a large cave and wanted to marry him. But as years
          went by, there came a time when the gods settled that he should go back to Ithaca; even
          then, however, when he was among his own people, his troubles were not yet over;
          nevertheless all the gods had now begun to pity him except Neptune, who still persecuted
          him without ceasing and would not let him get home.
        </p>
      </TextAnnotator>

      <TextAnnotatorPopup popup={props => <TestPopup {...props} />} />

      <MockStorage />
    </Annotorious>
  );
};

// import React, { useEffect, useState } from 'react';
// import { AnnotationBody, Annotorious, useAnnotationStore, useAnnotator } from '@annotorious/react';
// import { CETEIcean, TextAnnotatorPopup, TextAnnotatorPopupProps } from '@recogito/react-text-annotator';
// import { TextAnnotation, TextAnnotator as VanillaTextAnnotator } from '@recogito/text-annotator';
// import { TEIAnnotator } from '@recogito/react-text-annotator';

// const TestPopup = (props: TextAnnotatorPopupProps) => {

//   const store = useAnnotationStore();

//   const anno = useAnnotator<VanillaTextAnnotator>();

//   const body: AnnotationBody = {
//     id: `${Math.random()}`,
//     annotation: props.selected[0].annotation.id,
//     purpose: 'commenting',
//     value: 'A Dummy Comment'
//   }

//   const onClick = () => {
//     store.addBody(body);
//     anno.state.selection.clear();
//   }

//   return (
//     <div className="popup">
//       <input type="text" />
//       <button onClick={onClick}>Close</button>
//     </div>
//   )

// }

// const MockStorage = () => {

//   const anno = useAnnotator<VanillaTextAnnotator>();

//   useEffect(() => {
//     if (anno) {
//       anno.on('createAnnotation', (annotation: TextAnnotation) => {
//         console.warn('create', annotation);
//       });

//       anno.on('deleteAnnotation', (annotation: TextAnnotation) => {
//         console.warn('delete', annotation);
//       });

//       anno.on('selectionChanged', (annotations: TextAnnotation[]) => {
//         console.warn('selection changed', annotations);
//       });

//       anno.on('updateAnnotation', (annotation: TextAnnotation, previous: TextAnnotation) => {
//         console.warn('update', annotation, previous);
//       });
//     }
//   }, [anno]);

//   return null;

// }

// export default () => {

//   const [tei, setTEI] = useState<string | undefined>(`
//   <TEI xmlns="http://www.tei-c.org/ns/1.0">
//   <teiHeader>
//     <fileDesc>
//       <titleStmt><title>Homer:  The Odyssey</title></titleStmt>
//       <publicationStmt>
//         <p>800-700 BC</p>
//       </publicationStmt>
//       <sourceDesc>
//         <p><link target="http://recogito.pelagios.org/document/fb2f3hm1ihnwgn/part/1/edit"/></p>
//       </sourceDesc>
//     </fileDesc>
//   </teiHeader>
//   <text>
//     <body>
//       <div>
//         <p>
//           Tell me, O muse, of that ingenious hero who travelled far and wide after he had
//           sacked the famous town of Troy. Many cities did he visit,
//           and many were the nations with whose manners and customs he was acquainted;
//           moreover he suffered much by sea while trying to save his own life and bring his
//           men safely home; but do what he might he could not save his men, for they perished
//           through their own sheer folly in eating the cattle of the Sun-god
//           Hyperion; so the god prevented them from ever
//           reaching home. Tell me, too, about all these things, O daughter of Jove,
//           from whatsoever source you may know them.
//         </p>

//         <p>
//           So now all who escaped death in battle or by shipwreck had got safely home
//           except Ulysses, and he, though he was longing to return to
//           his wife and country, was detained by the goddess Calypso,
//           who had got him into a large cave and wanted to marry him. But as years went by,
//           there came a time when the gods settled that he should go back to
//           Ithaca; even
//           then, however, when he was among his own people, his troubles were not yet over;
//           nevertheless all the gods had now begun to pity him except Neptune, who still
//           persecuted him without ceasing and would not let him get home.
//         </p>

//         <p>
//           Now Neptune had gone off to the Ethiopians, who are at the world's end, and lie in
//           two halves, the one looking West and the other East. He had gone there to accept
//           a hecatomb of sheep and oxen, and was enjoying himself at his festival; but the
//           other gods met in the house of Olympian Jove, and the sire of gods and men spoke
//           first. At that moment he was thinking of Aegisthus, who had been killed by
//           Agamemnon's son Orestes; so he said to the other gods:
//         </p>

//         <p>
//           "See now, how men lay blame upon us gods for what is after all nothing but
//           their own folly. Look at Aegisthus; he must needs make love to Agamemnon's wife
//           unrighteously and then kill Agamemnon, though he knew it would be the death of him;
//           for I sent Mercury to warn him not to do either of these things, inasmuch as
//           Orestes would be sure to take his revenge when he grew up and wanted to return
//           home. Mercury told him this in all good will but he would not listen, and now he
//           has paid for everything in full."
//         </p>

//         <p>
//           Then Minerva said, "Father, son of Saturn, King of kings, it served Aegisthus
//           right, and so it would any one else who does as he did; but Aegisthus is neither
//           here nor there; it is for Ulysses that my heart bleeds, when I think of his
//           sufferings in that lonely sea-girt island, far away, poor man, from all his
//           friends. It is an island covered with forest, in the very middle of the sea,
//           and a goddess lives there, daughter of the magician Atlas, who looks after the
//           bottom of the ocean, and carries the great columns that keep heaven and earth
//           asunder. This daughter of Atlas has got hold of poor unhappy Ulysses, and keeps
//           trying by every kind of blandishment to make him forget his home, so that he
//           is tired of life, and thinks of nothing but how he may once more see the smoke of
//           his own chimneys. You, sir, take no heed of this, and yet when Ulysses was
//           before Troy did
//           he not propitiate you with many a burnt sacrifice? Why then should you keep on
//           being so angry with him?"
//         </p>

//         <p>
//           And Jove said, "My child, what are you talking about? How can I forget
//           Ulysses than whom there is no more capable man on earth,
//           nor more liberal in his offerings to the immortal gods that live in heaven? Bear in
//           mind, however, that Neptune is still furious with Ulysses for having blinded an eye
//           of Polyphemus king of the Cyclopes. Polyphemus is son to Neptune by the nymph
//           Thoosa, daughter to the sea-king Phorcys; therefore though he will not kill
//           Ulysses outright, he torments him by preventing him from getting home. Still, let
//           us lay our heads together and see how we can help him to return; Neptune will then
//           be pacified, for if we are all of a mind he can hardly stand out against us."
//         </p>

//         <p>
//           And Minerva said, "Father, son of Saturn, King of kings, if, then, the gods
//           now mean that Ulysses should get home, we should first send Mercury to the
//           Ogygian island
//           to tell Calypso that we have made up our minds and that he is to return. In the
//           meantime I will go to
//           Ithaca, to put
//           heart into Ulysses' son Telemachus; I will embolden him to call the Achaeans in
//           assembly, and speak out to the suitors of his mother Penelope, who persist in
//           eating up any number of his sheep and oxen; I will also conduct him to
//           Sparta and to Pylos, to
//           see if he can hear anything about the return of his dear father- for this will
//           make people speak well of him."
//         </p>
//       </div>
//     </body>
//   </text>
// </TEI>
//   `);

//   return (
//     <Annotorious>
//       <TEIAnnotator annotationEnabled renderer='CSS_HIGHLIGHTS'>
//         <CETEIcean tei={tei} />

//         <TextAnnotatorPopup
//           popup={props => (
//             <TestPopup {...props} />
//           )} />

//         <MockStorage />
//       </TEIAnnotator>
//     </Annotorious>
//   )

// }
