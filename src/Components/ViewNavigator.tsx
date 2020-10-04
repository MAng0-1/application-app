import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import TopNavComponent from './MinorComponents/TopNavComponent';
import AboutViewComponent from './ViewComponents/AboutViewComponent';
import AcademicsViewComponent from './ViewComponents/AcademicsViewComponent';
import GalleryViewComponent from './ViewComponents/GalleryViewComponent';
import HomeViewComponent from './ViewComponents/HomeViewComponent';
import ProjectsViewComponent from './ViewComponents/ProjectsViewComponent';

type Props = {};

//returns the Text of the specified object and index, gets passed down to the ViewComponents
function getStoredText(
  CurrentView: {
    content: string;
    index: number;
    type: string;
  }[],
  index: number,
): string {
  return index === CurrentView[index].index
    ? CurrentView[index].content
    : 'Err: Specified Content does not match location of stored data';
}

const ViewNavigator: FC<Props> = (props) => {
  return (
    <div>
      <TopNavComponent />
      <Switch>
        <Route
          exact
          path='/'
          render={(props) => <HomeViewComponent {...props} Text={getStoredText} />}
        />
        <Route
          exact
          path='/academics'
          render={(props) => <AcademicsViewComponent {...props} Text={getStoredText} />}
        />
        <Route
          exact
          path='/projects'
          render={(props) => <ProjectsViewComponent {...props} Text={getStoredText} />}
        />
        <Route
          exact
          path='/gallery'
          render={(props) => <GalleryViewComponent {...props} Text={getStoredText} />}
        />
        <Route
          exact
          path='/about'
          render={(props) => <AboutViewComponent {...props} Text={getStoredText} />}
        />
      </Switch>
    </div>
  );
};

export default ViewNavigator;
