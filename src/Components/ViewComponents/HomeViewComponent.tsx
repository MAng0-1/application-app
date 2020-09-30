import React, { FC } from 'react';
import Code_img from '../../data/images/Code.jpg';
import PC_img from '../../data/images/PC.jpeg';
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
  const Text = props.Text;
  return (
    <Styles.ContentContainer>
      <Styles.TextCard.Heading>{Text(HomeView, 0)}</Styles.TextCard.Heading>

      <Styles.Sleeve>
        <Styles.TextCard.Prose>{Text(HomeView, 1)}</Styles.TextCard.Prose>
      </Styles.Sleeve>

      <Styles.Sleeve>
        <Styles.TextCard.Prose>{Text(HomeView, 2)}</Styles.TextCard.Prose>
        <Styles.ImageCard src={PC_img} alt='My PC, case from XP-Era' />
      </Styles.Sleeve>

      <Styles.Sleeve>
        <Styles.ImageCard src={Code_img} alt='Stock image of code' />
        <Styles.TextCard.Prose>{Text(HomeView, 3)}</Styles.TextCard.Prose>
      </Styles.Sleeve>

      <Styles.Sleeve>
        <Styles.TextCard.Prose widthP={20}>{Text(HomeView, 4)}</Styles.TextCard.Prose>
        <TabBar titles={['A', 'B', 'C']}>
          <Styles.TextCard.Prose>{Text(HomeView, 5)}</Styles.TextCard.Prose>
          <Styles.TextCard.Prose>{Text(HomeView, 6)}</Styles.TextCard.Prose>
          <Styles.TextCard.Prose>{Text(HomeView, 7)}</Styles.TextCard.Prose>
        </TabBar>
      </Styles.Sleeve>

      <Styles.Sleeve>
        <Styles.TextCard.Quote>{Text(HomeView, 8)}</Styles.TextCard.Quote>
      </Styles.Sleeve>
    </Styles.ContentContainer>
  );
};

export default HomeViewComponent;
