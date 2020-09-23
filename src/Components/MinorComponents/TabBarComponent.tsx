import React, { Component } from 'react';
import { TabBarStyles as Styles } from './Minor.resources';

type Props = {
  titles: string[];
};

type State = {
  selectedTab: number;
};

class TabBarComponent extends Component<Props, State> {
  contentRef: React.RefObject<HTMLDivElement>;
  buttonRef: React.RefObject<HTMLDivElement> | null;
  setButtonRef: (e: any) => void;
  buttonWidth: number[] = [];

  constructor(props: Props) {
    super(props);
    this.state = { selectedTab: 1 };
    this.contentRef = React.createRef();
    this.buttonRef = null;
    this.setButtonRef = (element) => {
      this.buttonRef = element;
      this.buttonWidth.push(element.clientWidth);
    };
  }

  handleClick(i: number) {
    this.setState({ selectedTab: i + 1 });
    console.log(this.buttonWidth);
  }

  render() {
    return (
      <Styles.TabContainer>
        <Styles.TabBar>
          {this.props.titles.map((title, index) => (
            <Styles.TabButton
              key={title}
              onClick={() => this.handleClick(index)}
              ref={this.setButtonRef}>
              {title}
            </Styles.TabButton>
          ))}
        </Styles.TabBar>
        <Styles.TabSlider />
        <Styles.TabContentContainer showChild={this.state.selectedTab}>
          {this.props.children}
        </Styles.TabContentContainer>
      </Styles.TabContainer>
    );
  }
}

export default TabBarComponent;
