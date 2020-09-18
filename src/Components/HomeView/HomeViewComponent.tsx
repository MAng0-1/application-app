import React, { FC } from 'react';
import Cat01 from '../../data/images/image_1.jpg';
import Cat02 from '../../data/images/image_2.jpg';
import Cat03 from '../../data/images/image_3.jpg';
import { HomeView as CurrentView } from '../../data/text-sources.json';
import { HomeViewStyles as Styles } from './HomeView.resources';

type Props = {
  iterate: (length: number) => number;
};

function getStoredText(index: number): string {
  return index === CurrentView[index].index
    ? CurrentView[index].content
    : 'Err: Specified Content does not match location of stored data';
}

const HomeViewComponent: FC<Props> = (props) => {
  return (
    <Styles.CardContainer>
      <Styles.TextCard.Heading>{getStoredText(0)}</Styles.TextCard.Heading>

      <Styles.CenteredContainer>
        <Styles.TextCard.Prose>{getStoredText(1)}</Styles.TextCard.Prose>
      </Styles.CenteredContainer>

      <Styles.SplitContainer>
        <Styles.TextCard.Prose>{getStoredText(2)}</Styles.TextCard.Prose>
        <Styles.ImageCard src={Cat01} alt='cute cat' />
      </Styles.SplitContainer>

      <Styles.SplitContainer>
        <Styles.ImageCard src={Cat02} alt='sleepy cat' />
        <Styles.TextCard.Prose>{getStoredText(3)}</Styles.TextCard.Prose>
      </Styles.SplitContainer>

      <Styles.CenteredContainer>
        <Styles.TextCard.Quote>{getStoredText(4)}</Styles.TextCard.Quote>
      </Styles.CenteredContainer>

      <Styles.CenteredContainer>
        <Styles.ImageCard src={Cat03} alt='curious cat' />
      </Styles.CenteredContainer>
    </Styles.CardContainer>
  );
};

export default HomeViewComponent;
