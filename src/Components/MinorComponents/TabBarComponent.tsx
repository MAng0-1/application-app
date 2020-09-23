import React, { Component } from 'react';
import { TabBarStyles as Styles } from './Minor.resources';

type Props = {
  titles: string[];
};

type State = {
  selectedTab: number;
};

class TabBarComponent extends Component<Props, State> {
  TabButtons: JSX.Element[];
  contentRef: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);
    this.state = { selectedTab: 1 };
    this.TabButtons = this.props.titles.map((title, index) => (
      <Styles.TabButton key={title} onClick={() => this.handleClick(index)}>
        {title}
      </Styles.TabButton>
    ));
    this.contentRef = React.createRef();
  }

  handleClick(i: number) {
    this.setState({ selectedTab: i + 1 });
  }

  render() {
    return (
      <Styles.TabContainer>
        <Styles.TabBar>{this.TabButtons}</Styles.TabBar>
        <Styles.TabContentContainer showChild={this.state.selectedTab}>
          {this.props.children}
        </Styles.TabContentContainer>
      </Styles.TabContainer>
    );
  }
}

export default TabBarComponent;
