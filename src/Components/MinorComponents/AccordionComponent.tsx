import React, { Component } from 'react';
import { AccordionStyles as Styles } from './Minor.resources';

type Props = { title: string };

type State = { panelHeight: number; isTransitionActive: boolean | undefined };

class AccordionComponent extends Component<Props, State> {
  private panelRef: React.RefObject<HTMLDivElement>;
  private iconRef: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);
    this.state = { panelHeight: 5000, isTransitionActive: false };
    this.panelRef = React.createRef();
    this.iconRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(): boolean | undefined {
    //to accomodate measuring the panel in componentDidMount, the transition property is introduced via the first click
    if (this.state.isTransitionActive === false) {
      this.setState({
        isTransitionActive: this.panelRef.current?.classList.toggle('with-transition'),
      });
    }
    const icon = this.iconRef.current?.classList.toggle('is-panel-open');
    return this.panelRef.current?.classList.toggle('is-panel-open');
  }

  componentDidMount() {
    if (this.panelRef.current != null) {
      const a = this.panelRef.current?.classList.toggle('is-panel-open');
      this.setState({ panelHeight: this.panelRef.current.clientHeight });
    }
  }

  render() {
    return (
      <Styles.AccordionContainer>
        <Styles.Handle onClick={this.handleClick}>
          <Styles.SvgContainer ref={this.iconRef}>
            <Styles.SvgFit>
              <polygon points='26,33 43,23 26,13' fill='none' stroke='white' />
            </Styles.SvgFit>
          </Styles.SvgContainer>
          {this.props.title}
        </Styles.Handle>
        <Styles.Panel ref={this.panelRef} ph={this.state.panelHeight}>
          {' '}
          {this.props.children}
        </Styles.Panel>
      </Styles.AccordionContainer>
    );
  }
}

export default AccordionComponent;
