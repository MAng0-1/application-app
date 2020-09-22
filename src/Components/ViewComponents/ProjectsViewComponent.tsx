import React, { FC } from 'react';
import TabButton from '../MinorComponents/TabButtonComponent';
import Topnav from '../MinorComponents/TopNavComponent';
import { SharedStyles as Styles } from '../Shared.resources';

type Props = {};

const ProjectsViewComponent: FC<Props> = () => {
  return (
    <Styles.ContentContainer>
      <Topnav />
      <Styles.MenuSleeve>
        <TabButton> Centigrade </TabButton>
        <TabButton> Company 2 </TabButton>
        <TabButton> Company 3 </TabButton>
      </Styles.MenuSleeve>
    </Styles.ContentContainer>
  );
};

export default ProjectsViewComponent;
