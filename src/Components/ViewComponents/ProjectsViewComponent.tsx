import React, { FC } from 'react';
import Accordion from '../MinorComponents/AccordionComponent';
import TabBar from '../MinorComponents/TabBarComponent';
import Topnav from '../MinorComponents/TopNavComponent';
import { SharedStyles as Styles } from '../Shared.resources';

type Props = {};

const ProjectsViewComponent: FC<Props> = () => {
  return (
    <Styles.ContentContainer>
      <Topnav />
      <TabBar titles={['Centigrade', 'Company2', 'Company3', 'aaaaaaaaaaaaaaaa']}>
        <Styles.Sleeve>
          <Styles.TextCard.Prose> aaaaaaaaaaaaaaaaa </Styles.TextCard.Prose>
        </Styles.Sleeve>
        <Accordion title='bli'>Content</Accordion>
        <Accordion title='bla'>Content</Accordion>
        <Accordion title='blubb'>Content</Accordion>
      </TabBar>
    </Styles.ContentContainer>
  );
};

export default ProjectsViewComponent;
