import React, { FC } from 'react';
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
  let textContent = () => getStoredText(props.iterate(CurrentView.length));
  return (
    <Styles.CardContainer>
      <Styles.TextCard.Heading>{textContent}</Styles.TextCard.Heading>

      <Styles.TextCard.Prose>{textContent}</Styles.TextCard.Prose>

      <Styles.TextImageCard>
        <Styles.TextCard.Prose>{textContent}</Styles.TextCard.Prose>
        <Styles.ImageCard></Styles.ImageCard>
      </Styles.TextImageCard>

      <Styles.TextImageCard>
        <Styles.ImageCard></Styles.ImageCard>
        <Styles.TextCard.Prose>{textContent}</Styles.TextCard.Prose>
      </Styles.TextImageCard>

      <Styles.TextCard.Quote>{textContent}</Styles.TextCard.Quote>

      <Styles.ImageCard></Styles.ImageCard>
    </Styles.CardContainer>
  );
};

export default HomeViewComponent;
