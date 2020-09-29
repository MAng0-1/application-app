import React, { FC } from 'react';
import { AboutView as CurrentView } from '../../data/text-sources.json';
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

const AboutViewComponent: FC<Props> = (props) => {
  return (
    <Styles.ContentContainer>
      <Styles.TextCard.Heading> {props.Text(CurrentView, 0)} </Styles.TextCard.Heading>
      <Styles.Sleeve>
        <Styles.TextCard.Prose>{props.Text(CurrentView, 1)}</Styles.TextCard.Prose>
      </Styles.Sleeve>
      <Styles.Sleeve>
        <Styles.TextCard.Prose>
          <a href={'https://github.com/Qkey01/application-app'}>
            Zum Github Repository dieser Seite
          </a>
        </Styles.TextCard.Prose>
      </Styles.Sleeve>
    </Styles.ContentContainer>
  );
};

export default AboutViewComponent;
