import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeViewComponent from './HomeView/HomeViewComponent';

type Props = null;

type State = {
  contentIterator: number;
};

class ViewNavigator extends Component<Props, State> {
  constructor(props: Props) {
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
        <Route
          exact
          path='/'
          render={(props) => <HomeViewComponent {...props} iterate={this.iterate} />}
        />
      </Switch>
    );
  }
}

export default ViewNavigator;
