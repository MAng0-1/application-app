import React, { FC, useState } from 'react';
import { TopNavStyles as Styles } from './Minor.resources';

type Props = {};

const TopNavComponent: FC<Props> = () => {
  const [page, setPage] = useState(1);
  return (
    <Styles.TopNavContainer selectedPage={page}>
      <Styles.NavButton onClick={() => setPage(1)} to='/'>
        {'Home'}
      </Styles.NavButton>
      <Styles.NavButton onClick={() => setPage(2)} to='/academics'>
        {'Academics'}
      </Styles.NavButton>
      <Styles.NavButton onClick={() => setPage(3)} to='/projects'>
        {'Projects'}
      </Styles.NavButton>
      <Styles.NavButton onClick={() => setPage(4)} to='/gallery'>
        {'Gallery'}
      </Styles.NavButton>
      <Styles.NavButton onClick={() => setPage(5)} to='/about'>
        {'About this Website'}
      </Styles.NavButton>
    </Styles.TopNavContainer>
  );
};

export default TopNavComponent;
