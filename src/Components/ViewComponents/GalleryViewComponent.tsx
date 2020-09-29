import React, { FC } from 'react';
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

const GalleryViewComponent: FC<Props> = (props) => {
  return (
    <Styles.ContentContainer>
      <Styles.TextCard.Heading> WORK IN PROGRESS </Styles.TextCard.Heading>
    </Styles.ContentContainer>
  );
};

export default GalleryViewComponent;
