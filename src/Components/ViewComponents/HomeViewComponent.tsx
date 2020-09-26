import React, { FC } from 'react';
import CatJam from '../../data/images/gif_01.gif';
import Cat01 from '../../data/images/image_1.jpg';
import Cat02 from '../../data/images/image_2.jpg';
import Cat03 from '../../data/images/image_3.jpg';
import { HomeView } from '../../data/text-sources.json';
import TabBar from '../MinorComponents/TabBarComponent';
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

const HomeViewComponent: FC<Props> = (props) => {
  return (
    <Styles.ContentContainer>
      <Styles.TextCard.Heading>{props.Text(HomeView, 0)}</Styles.TextCard.Heading>

      <Styles.Sleeve>
        <Styles.TextCard.Prose>{props.Text(HomeView, 1)}</Styles.TextCard.Prose>
      </Styles.Sleeve>

      <Styles.Sleeve>
        <Styles.TextCard.Prose>{props.Text(HomeView, 2)}</Styles.TextCard.Prose>
        <Styles.ImageCard src={Cat01} alt='cute cat' />
      </Styles.Sleeve>

      <Styles.Sleeve>
        <Styles.ImageCard src={Cat02} alt='sleepy cat' />
        <Styles.TextCard.Prose>{props.Text(HomeView, 3)}</Styles.TextCard.Prose>
      </Styles.Sleeve>

      <Styles.Sleeve>
        <Styles.TextCard.Prose widthP={20}>{props.Text(HomeView, 4)}</Styles.TextCard.Prose>

        <TabBar titles={['A', 'B', 'C']}>
          <Styles.TextCard.Prose>{props.Text(HomeView, 5)}</Styles.TextCard.Prose>
          <Styles.TextCard.Prose>{props.Text(HomeView, 6)}</Styles.TextCard.Prose>
          <Styles.TextCard.Prose>{props.Text(HomeView, 7)}</Styles.TextCard.Prose>
        </TabBar>
      </Styles.Sleeve>
      <Styles.Sleeve></Styles.Sleeve>
      <Styles.Sleeve>
        <Styles.TextCard.Quote>{props.Text(HomeView, 8)}</Styles.TextCard.Quote>
      </Styles.Sleeve>

      <Styles.Sleeve>
        <Styles.ImageCard src={Cat03} alt='curious cat' />
      </Styles.Sleeve>

      <Styles.Sleeve>
        <Styles.TextCard.Heading>Radio Quarantino be like:</Styles.TextCard.Heading>
        <Styles.ImageCard src={CatJam} alt='catjam pog' />
      </Styles.Sleeve>
    </Styles.ContentContainer>
  );
};

export default HomeViewComponent;
