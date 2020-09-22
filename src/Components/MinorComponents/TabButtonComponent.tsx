import React, { Component } from 'react';
import { TabButtonStyles as Styles } from './Minor.resources';

type Props = {};

type Status = {};

class TabButtonComponent extends Component<Props, Status> {
  handleClick() {
    console.log('yes');
  }

  render() {
    return <Styles.TabButton onClick={this.handleClick}>{this.props.children}</Styles.TabButton>;
  }
}

export default TabButtonComponent;
