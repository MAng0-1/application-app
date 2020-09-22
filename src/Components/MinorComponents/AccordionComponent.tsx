// import React, { FC, useEffect, useState } from 'react';
// import { AccordionStyles as Styles } from './Minor.resources';

// type Props = { title: string };
// const panelRef = React.createRef<HTMLDivElement>();

// function handleClick() {
//   const a = panelRef.current?.classList.toggle('is-panel-closed');
// }

// const AccordionComponent: FC<Props> = (props) => {
//   const [panelHeight, setPanelHeight] = useState(5000);

//   //sets the height value of the hidden panel as the max-height for transition purposes
//   useEffect(() => {
//     if (panelRef.current != null) {
//       setPanelHeight(panelRef.current.clientHeight);
//       handleClick();
//     }
//   }, [panelHeight]);

//   return (
//     <Styles.Container>
//       <Styles.Handle onClick={handleClick}>{props.title}</Styles.Handle>
//       <Styles.Panel ref={panelRef} ph={panelHeight}>
//         {' '}
//         {props.children}
//       </Styles.Panel>
//     </Styles.Container>
//   );
// };

// export default AccordionComponent;

import React, { Component } from 'react';
import { AccordionStyles as Styles } from './Minor.resources';

type Props = { title: string };

type State = { panelHeight: number; isTransitionActive: boolean | undefined };

class AccordionComponent extends Component<Props, State> {
  private panelRef: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);
    this.state = { panelHeight: 5000, isTransitionActive: false };
    this.panelRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(): boolean | undefined {
    //to accomodate measuring the panel in componentDidMount, the transition property is introduced via the first click
    if (this.state.isTransitionActive == false) {
      this.setState({
        isTransitionActive: this.panelRef.current?.classList.toggle('with-transition'),
      });
    }
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
      <Styles.Container>
        <Styles.Handle onClick={this.handleClick}>{this.props.title}</Styles.Handle>
        <Styles.Panel ref={this.panelRef} ph={this.state.panelHeight}>
          {' '}
          {this.props.children}
        </Styles.Panel>
      </Styles.Container>
    );
  }
}

export default AccordionComponent;
