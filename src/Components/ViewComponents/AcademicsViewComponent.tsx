import React, { FC } from 'react';
import TGS from '../../data/images/TGS.jpg';
import THI from '../../data/images/THI.jpg';
import { AcademicsView } from '../../data/text-sources.json';
import Accordion from '../MinorComponents/AccordionComponent';
import { SharedStyles as Styles } from '../Shared.resources';

type Props = {
  Text: (
    CurrentView: {
      content: string;
      index: number;
      type: string;
    }[],
    index: number,
  ) => string;
};

const AcademicsViewComponent: FC<Props> = (props) => {
  const Text = props.Text;
  return (
    <Styles.ContentContainer>
      <Styles.TextCard.Heading>{Text(AcademicsView, 0)}</Styles.TextCard.Heading>
      <Styles.Sleeve>
        <Styles.TextCard.Prose>{Text(AcademicsView, 1)}</Styles.TextCard.Prose>
      </Styles.Sleeve>
      <Accordion title={Text(AcademicsView, 2)}>
        <Styles.Sleeve>
          <Styles.TextCard.Prose>{Text(AcademicsView, 3)}</Styles.TextCard.Prose>
          <Styles.ImageCard src={TGS} alt='Tassilo-Gymnasium Simbach' widthP={40} />
        </Styles.Sleeve>
      </Accordion>

      <Accordion title={Text(AcademicsView, 4)}>
        <Styles.Sleeve>
          <Styles.TextCard.Prose>{Text(AcademicsView, 5)}</Styles.TextCard.Prose>
          <Styles.ImageCard src={THI} alt='Technische Hochschule Ingolstadt' widthP={40} />
        </Styles.Sleeve>
      </Accordion>
    </Styles.ContentContainer>
  );
};

export default AcademicsViewComponent;
