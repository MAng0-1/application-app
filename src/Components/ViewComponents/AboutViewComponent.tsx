import React, { FC } from 'react';
import { SharedStyles as Styles } from '../Shared.resources';

type Props = {};

const AboutViewComponent: FC<Props> = (props) => {
  return (
    <Styles.ContentContainer>
      <Styles.TextCard.Heading> WORK IN PROGRESS </Styles.TextCard.Heading>
    </Styles.ContentContainer>
  );
};

export default AboutViewComponent;
