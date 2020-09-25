import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import TopNavComponent from './MinorComponents/TopNavComponent';
import AboutViewComponent from './ViewComponents/AboutViewComponent';
import AcademicsViewComponent from './ViewComponents/AcademicsViewComponent';
import GalleryViewComponent from './ViewComponents/GalleryViewComponent';
import HomeViewComponent from './ViewComponents/HomeViewComponent';
import ProjectsViewComponent from './ViewComponents/ProjectsViewComponent';

type Props = {};

const ViewNavigator: FC<Props> = () => {
  return (
    <div>
      <TopNavComponent />
      <Switch>
        <Route exact path='/' component={HomeViewComponent} />
        <Route exact path='/academics' component={AcademicsViewComponent} />
        <Route exact path='/projects' component={ProjectsViewComponent} />
        <Route exact path='/gallery' component={GalleryViewComponent} />
        <Route exact path='/about' component={AboutViewComponent} />
      </Switch>
    </div>
  );
};

export default ViewNavigator;
