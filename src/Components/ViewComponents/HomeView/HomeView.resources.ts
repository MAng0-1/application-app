import styled from 'styled-components';
import { Font, Margin } from '../../Shared.resources';

export const HomeViewStyles = {
  ContentContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  `,

  Sleeve: styled.div`
    width: 100%;
    max-height 25em;
    display: flex;
    justify-content: center;
    margin-bottom: ${Margin.large};
  `,

  TextCard: {
    Heading: styled.div`
      text-decoration: underline double;
      font: ${Font.large};
      text-align: center;
      margin: ${Margin.medium} ${Margin.small} ${Margin.large};
      width: auto;
    `,
    Prose: styled.div`
      text-align: justify;
      font: ${Font.medium};
      padding: 1em;
      width: 90%;
      background-color: white;
      display: flex;
      align-items: center;
      min-width: initial;
      overflow-y: auto;
    `,
    Quote: styled.div`
      font: ${Font.mediumlarge};
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2em 10em;
      max-width: 80%;
      background-color: white;
    `,
  },

  ImageCard: styled.img`
    display: block;
    max-width: 100%;
    width: auto;
    height: 25em;
  `,
};
