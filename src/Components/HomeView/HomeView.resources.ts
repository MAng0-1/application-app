import styled from 'styled-components';
import { Margin } from '../shared.resources';

export const HomeViewStyles = {
  CardContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  `,

  CenteredContainer: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: darkgrey;
    margin-bottom: ${Margin.small};
  `,

  SplitContainer: styled.div`
    display: flex;
    margin-bottom: ${Margin.small};
  `,

  TextCard: {
    Heading: styled.div`
      text-decoration: underline;
      font: 700 1.777em auto;
      text-align: center;
      margin-bottom: ${Margin.large};
      margin-top: ${Margin.medium};
      width: 100%;
    `,
    Prose: styled.div`
      text-align: justify;
      padding: 1em;
      width: 80%;
      background-color: white;
      display: flex;
      align-items: center;
    `,
    Quote: styled.div``,
  },

  ImageCard: styled.img`
    background: darkgrey;
    height 300px;
  `,
};
