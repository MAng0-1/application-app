import React, { FC } from 'react';
import { TopNavStyles as Styles } from './Minor.resources';

type Props = {};

const TopNavComponent: FC<Props> = () => {
  return (
    <Styles.Container>
      <Styles.NavButton to='/'> Home </Styles.NavButton>
      <Styles.NavButton to='/academics'> Academics</Styles.NavButton>
      <Styles.NavButton to='/projects'> Projects </Styles.NavButton>
      <Styles.NavButton to='/gallery'> Gallery </Styles.NavButton>
    </Styles.Container>
  );
};

export default TopNavComponent;
