import React, { FC } from 'react';
import Arduino from '../../data/images/Arduino_ATAT.jpeg';
import Schaltplan from '../../data/images/Arduino_Schaltplan.jpeg';
import Egogramm1 from '../../data/images/Egogramm_01.png';
import Egogramm2 from '../../data/images/Egogramm_02.png';
import { ProjectsView as CurrentView } from '../../data/text-sources.json';
import Accordion from '../MinorComponents/AccordionComponent';
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

const ProjectsViewComponent: FC<Props> = (props) => {
  const Text = props.Text;

  return (
    <Styles.ContentContainer>
      <Styles.TextCard.Heading>{Text(CurrentView, 10)}</Styles.TextCard.Heading>

      <TabBar titles={[Text(CurrentView, 0), Text(CurrentView, 1), Text(CurrentView, 2)]}>
        <Styles.ContentContainer>
          <Accordion title={Text(CurrentView, 3)}>
            <Styles.Sleeve>
              <Styles.TextCard.Prose>
                {Text(CurrentView, 4)}
                <br />
                <br />
                {Text(CurrentView, 5)}
                <br />
                {Text(CurrentView, 6)}
                <br />
              </Styles.TextCard.Prose>
            </Styles.Sleeve>
            <Styles.Sleeve>
              <Styles.ImageCard
                src={Arduino}
                alt={'Arduino Punchclock'}
                style={{ marginRight: '2rem' }}
              />
              <Styles.ImageCard src={Schaltplan} alt={'Arduino Schaltplan'} />
            </Styles.Sleeve>
            <a href={'https://github.com/Qkey01/arduino-punchclock'}>Zum Github Repository</a>
          </Accordion>

          <Accordion title={Text(CurrentView, 7)}>
            <Styles.Sleeve>
              <Styles.TextCard.Prose>
                {Text(CurrentView, 8)}
                <br />
                <br />
                {Text(CurrentView, 9)}
              </Styles.TextCard.Prose>
            </Styles.Sleeve>
            <Styles.Sleeve>
              <Styles.ImageCard
                src={Egogramm1}
                alt={'Egogramm Fragebogen-Ansicht'}
                style={{ marginRight: '2rem', border: 'solid black 1px' }}
              />
              <Styles.ImageCard src={Egogramm2} alt={'Egogramm Ergebnis-Ansicht'} />
            </Styles.Sleeve>
            <div> Link zum Repository noch nicht verfügbar </div>
          </Accordion>
        </Styles.ContentContainer>
        <Styles.Sleeve>
          <Styles.TextCard.Prose> Sample Text </Styles.TextCard.Prose>
        </Styles.Sleeve>
        <Styles.Sleeve>
          <Styles.TextCard.Prose> Sample Text </Styles.TextCard.Prose>
        </Styles.Sleeve>
      </TabBar>
    </Styles.ContentContainer>
  );
};

export default ProjectsViewComponent;
