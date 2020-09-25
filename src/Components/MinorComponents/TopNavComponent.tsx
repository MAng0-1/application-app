import React, { FC } from 'react';
import { TopNavStyles as Styles } from './Minor.resources';

type Props = {};

const TopNavComponent: FC<Props> = () => {
  return (
    <Styles.TopNavContainer>
      <Styles.NavButton to='/'> Home </Styles.NavButton>
      <Styles.NavButton to='/academics'> Academics</Styles.NavButton>
      <Styles.NavButton to='/projects'> Projects </Styles.NavButton>
      <Styles.NavButton to='/gallery'> Gallery </Styles.NavButton>
      <Styles.NavButton to='/about'> About this Website </Styles.NavButton>
    </Styles.TopNavContainer>
  );
};

export default TopNavComponent;
