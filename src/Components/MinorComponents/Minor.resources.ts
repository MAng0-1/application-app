import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { Margin } from '../Shared.resources';

export const TopNavStyles = {
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

const stretch = keyframes`
  from {
    height: 0;
  }
  to {
    height: 1000px;
  }
`;

export const AccordionStyles = {
  Handle: styled.button`
    background-color: slategrey;
    color: white;
    width: 100%;
    height 100%;
    padding: 1em;
    border: solid white 1px;
    border-radius: 0.5em;
    cursor: pointer;
  `,
  Panel: styled.div<{ ph: number }>`
    background-color: white;
    width: 90%;
    max-height: ${(props) => props.ph}px;
    padding: 3%;
    transition: max-height 0.25s ease-in-out, padding 0.1s 0.2s;
    overflow: hidden;
    &.is-panel-closed {
      padding: 0;
      max-height: 0;
    }
  `,
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
  `,
};
