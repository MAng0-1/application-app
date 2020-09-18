import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Margin } from '../Shared.resources';

export const SharedStyles = {
  Container: styled.div`
    height: 2em;
    background-color: slategrey;
    padding: 0.5em 0 0;
    width: 100%;
    margin-bottom: ${Margin.large};
    display: block;
  `,

  NavButton: styled(Link)`
    width: auto;
    height: 100%;
    padding: 1em 1em 1.1em;
    color: white;
    text-decoration: none;
    &:hover {
      background-color: white;
      color: black;
    }
  `,
};
