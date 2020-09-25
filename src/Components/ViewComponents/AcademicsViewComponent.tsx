import React, { FC } from 'react';
import Cat03 from '../../data/images/image_3.jpg';
import { AcademicsView as CurrentView } from '../../data/text-sources.json';
import Accordion from '../MinorComponents/AccordionComponent';
import { SharedStyles as Styles } from '../Shared.resources';

type Props = {};

function getStoredText(index: number): string {
  return index === CurrentView[index].index
    ? CurrentView[index].content
    : 'Err: Specified Content does not match location of stored data';
}

const AcademicsViewComponent: FC<Props> = (props) => {
  return (
    <Styles.ContentContainer>
      <Styles.TextCard.Heading>AcademicsView</Styles.TextCard.Heading>
      <Styles.Sleeve>
        <Styles.TextCard.Prose>{getStoredText(0)}</Styles.TextCard.Prose>
      </Styles.Sleeve>
      <Accordion title={getStoredText(1)}>
        <Styles.Sleeve>
          <Styles.TextCard.Prose>{getStoredText(2)}</Styles.TextCard.Prose>
        </Styles.Sleeve>
        <Accordion title={'stacked af'}> Yes </Accordion>
      </Accordion>

      <Accordion title={getStoredText(3)}>
        <Styles.Sleeve>
          <Styles.TextCard.Prose>{getStoredText(2)}</Styles.TextCard.Prose>
          <Styles.ImageCard src={Cat03} alt='sleepy kitty' widthP={40} />
        </Styles.Sleeve>
      </Accordion>
    </Styles.ContentContainer>
  );
};

export default AcademicsViewComponent;
