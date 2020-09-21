import React, { FC } from 'react';
import CatJam from '../../../data/images/gif_01.gif';
import Cat01 from '../../../data/images/image_1.jpg';
import Cat02 from '../../../data/images/image_2.jpg';
import Cat03 from '../../../data/images/image_3.jpg';
import { HomeView as CurrentView } from '../../../data/text-sources.json';
import Topnav from '../../MinorComponents/TopNavComponent';
import { SharedStyles as Styles } from '../../Shared.resources';

type Props = {};

function getStoredText(index: number): string {
  return index === CurrentView[index].index
    ? CurrentView[index].content
    : 'Err: Specified Content does not match location of stored data';
}

const HomeViewComponent: FC<Props> = (props) => {
  return (
    <Styles.ContentContainer>
      <Topnav />
      <Styles.TextCard.Heading>{getStoredText(0)}</Styles.TextCard.Heading>

      <Styles.Sleeve>
        <Styles.TextCard.Prose>{getStoredText(1)}</Styles.TextCard.Prose>
      </Styles.Sleeve>

      <Styles.Sleeve>
        <Styles.TextCard.Prose>{getStoredText(2)}</Styles.TextCard.Prose>
        <Styles.ImageCard src={Cat01} alt='cute cat' />
      </Styles.Sleeve>

      <Styles.Sleeve>
        <Styles.ImageCard src={Cat02} alt='sleepy cat' />
        <Styles.TextCard.Prose>{getStoredText(3)}</Styles.TextCard.Prose>
      </Styles.Sleeve>

      <Styles.Sleeve>
        <Styles.TextCard.Quote>{getStoredText(4)}</Styles.TextCard.Quote>
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
