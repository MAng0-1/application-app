import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Font, Margin, SharedStyles } from '../Shared.resources';

export const TopNavStyles = {
  TopNavContainer: styled.div`
    height: 2em;
    background-color: slategrey;
    padding: 0.5em 0 0;
    width: 100%;
    margin-bottom: ${Margin.medium};
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

export const AccordionStyles = {
  Handle: styled.button`
    background-color: slategrey;
    color: white;
    width: 100%;
    height 4em;
    display: flex;
    align-items: center;
    padding: 0.5em;
    font: ${Font.standard};
    border: solid white 1px;
    border-radius: 0.5em;
    cursor: pointer;

    &:focus{
      outline: none;
    }
  `,
  Panel: styled.div<{ ph: number }>`
    background-color: white;
    width: 90%;
    max-height: 0;
    overflow: hidden;
    margin-bottom: 0;
    &.is-panel-open {
      padding: 2%;
      max-height: ${(props) => props.ph}px;
    }
    &.with-transition {
      transition: max-height 0.25s ease-in-out, padding 0.2s ease-in-out, margin 0.2s ease-in-out;
    }
  `,
  AccordionContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
  `,
  SvgContainer: styled.div`
    height: 100%;
    width: 4em;
    transition: transform 0.2s &.is-panel-open {
      transform: rotate(90deg);
    }
  `,
  SvgFit: styled.svg`
    height: 100%;
    width: 100%;
  `,
};

export const TabBarStyles = {
  TabContainer: styled.div`
    width: 100%;
  `,

  TabContentContainer: styled.div<{ showChild: number }>`
    div:nth-child(n) {
      display: none;
    }

    div:nth-child(${(props) => props.showChild + 1}) {
      display: flex;
    }
  `,

  TabButton: styled.div<{ position?: number }>`
    height: 1.25em;
    font: ${Font.mediumlarge};
    appearance: button;
    text-rendering: auto;
    color: darkslategrey;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    border-bottom: solid lightslategrey 0.15em;
    padding: 0.5em 0.8em;

    &:first-child {
      padding-left: 0.45em;
    }

    &:last-child {
      margin-right: 30%;
      padding-right: 0.45em;
    }
  `,

  TabSlider: styled.div<{ buttonW: number[]; selected: number }>`
    height: 0.26em;
    background-color: darkslategrey;
    width: ${(p) => p.buttonW[p.selected]}px;
    position: relative;
    align-self: flex-end;

    left: ${(p) => {
      let val: number = 0;
      for (let i: number = p.buttonW.length - 1; i >= p.selected; i--) val = val - p.buttonW[i];
      return val;
    }}px;

    transition: width 0.2s ease-in-out, left 0.2s ease-in-out;
  `,

  TabBar: styled(SharedStyles.Sleeve)`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin: 0 0 ${Margin.medium} 3%;
  `,
};
