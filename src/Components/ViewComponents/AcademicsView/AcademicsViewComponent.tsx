import React, { FC } from 'react';
import Accordion from '../../MinorComponents/AccordionComponent';
import { SharedStyles as Styles } from '../../Shared.resources';

type Props = {};

const AcademicsViewComponent: FC<Props> = () => {
  return (
    <Styles.ContentContainer>
      <Accordion title='this is a test'>
        {' '}
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
        ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
        ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum{' '}
      </Accordion>
      <Accordion title='this is a problem'>
        {' '}
        No front bruder No front bruder No front bruder No front bruder No front bruder No front
        bruder No front bruder No front bruder No front bruder No front bruder No front bruder No
        front bruder No front bruder No front bruder No front bruder No front bruder No front bruder
        No front bruder No front bruder No front bruder No front bruder No front bruder No front
        bruder No front bruder No front bruder
      </Accordion>
    </Styles.ContentContainer>
  );
};

export default AcademicsViewComponent;
