import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AcademicsViewComponent from './ViewComponents/AcademicsView/AcademicsViewComponent';
import GalleryViewComponent from './ViewComponents/GalleryView/GalleryViewComponent';
import HomeViewComponent from './ViewComponents/HomeView/HomeViewComponent';
import ProjectsViewComponent from './ViewComponents/ProjectsView/ProjectsViewComponent';

type State = {
  contentIterator: number;
};

class ViewNavigator extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      contentIterator: 0,
    };
    this.iterate = this.iterate.bind(this);
  }

  //returns an index for displaying the correct content on the subsites
  iterate(length: number) {
    let currentIndex = this.state.contentIterator;
    this.setState({ contentIterator: (this.state.contentIterator + 1) % length });
    return currentIndex;
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomeViewComponent} />
        <Route exact path='/academics' component={AcademicsViewComponent} />
        <Route exact path='/projects' component={ProjectsViewComponent} />
        <Route exact path='/gallery' component={GalleryViewComponent} />
      </Switch>
    );
  }
}

export default ViewNavigator;
