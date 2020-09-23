import React, { FC } from 'react';
import Topnav from '../MinorComponents/TopNavComponent';
import { SharedStyles as Styles } from '../Shared.resources';

type Props = {};

const AboutViewComponent: FC<Props> = () => {
  return (
    <Styles.ContentContainer>
      <Topnav />
      <Styles.TextCard.Heading> WORK IN PROGRESS </Styles.TextCard.Heading>
    </Styles.ContentContainer>
  );
};

export default AboutViewComponent;
