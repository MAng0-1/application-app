import React, { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TopNavStyles as Styles } from './Minor.resources';

type Props = {};

//returns current page, used at refresh
function mapLocation(pathname: string): number {
  switch (pathname) {
    case '/academics':
      return 2;

    case '/projects':
      return 3;

    case '/gallery':
      return 4;

    case '/about':
      return 5;

    default:
      return 1;
  }
}

const TopNavComponent: FC<Props> = () => {
  const location = useLocation();
  const [page, setPage] = useState(mapLocation(location.pathname));
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
