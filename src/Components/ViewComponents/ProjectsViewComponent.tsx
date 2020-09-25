import React, { FC } from 'react';
import Accordion from '../MinorComponents/AccordionComponent';
import TabBar from '../MinorComponents/TabBarComponent';
import { SharedStyles as Styles } from '../Shared.resources';

type Props = {};

const ProjectsViewComponent: FC<Props> = (props) => {
  return (
    <Styles.ContentContainer>
      <TabBar titles={['Centigrade', 'Company2', 'Company3', 'aaaaaaaaaaaaaaaa']}>
        <Accordion title='bli'>
          <TabBar titles={['aaa', 'bbb']}>
            <div>yes</div>
            <div>no</div>
          </TabBar>
        </Accordion>
        <Styles.Sleeve>
          <Styles.TextCard.Prose> aaaaaaaaaaaaaaaaa </Styles.TextCard.Prose>
        </Styles.Sleeve>
        <Accordion title='bli'>
          <TabBar titles={['aaa', 'bbb']}>
            <div>yes</div>
            <div>no</div>
          </TabBar>
        </Accordion>
      </TabBar>
    </Styles.ContentContainer>
  );
};

export default ProjectsViewComponent;
