import React, { FC } from 'react';
import TabBar from '../MinorComponents/TabBarComponent';
import Topnav from '../MinorComponents/TopNavComponent';
import { SharedStyles as Styles } from '../Shared.resources';

type Props = {};

const ProjectsViewComponent: FC<Props> = () => {
  return (
    <Styles.ContentContainer>
      <Topnav />
      <TabBar titles={['Centigrade', 'Company2', 'Company3']}>
        <Styles.TabContent> aaaaaaaaaaaaaa </Styles.TabContent>
        <Styles.TabContent> bbbbbbbbbbbbbb </Styles.TabContent>
        <Styles.TabContent> cccccccccccccc </Styles.TabContent>
      </TabBar>
    </Styles.ContentContainer>
  );
};

export default ProjectsViewComponent;
