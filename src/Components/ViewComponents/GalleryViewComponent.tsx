import React, { FC } from 'react';
import Topnav from '../MinorComponents/TopNavComponent';
import { SharedStyles as Styles } from '../shared.resources';

type Props = {};

const GalleryViewComponent: FC<Props> = () => {
  return (
    <Styles.ContentContainer>
      <Topnav />
      <Styles.TextCard.Heading> WORK IN PROGRESS </Styles.TextCard.Heading>
    </Styles.ContentContainer>
  );
};

export default GalleryViewComponent;
