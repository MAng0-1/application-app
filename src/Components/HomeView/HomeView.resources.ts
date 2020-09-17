import styled from 'styled-components';

export const HomeViewStyles = {
  CardContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    align-self: center;
  `,

  TextCard: {
    Heading: styled.div`
      text-decoration: underline;
      font: 700 1.2em;
      text-align: center;
      width: 100%;
    `,
    Prose: styled.div`
      text-align: justified;
    `,
    Quote: styled.div``,
  },

  TextImageCard: styled.div``,
  QuoteCard: styled.div``,
  ImageCard: styled.div``,
};
