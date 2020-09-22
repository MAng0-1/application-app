import styled from 'styled-components';

export const Margin = {
  small: '1rem',
  medium: '2rem',
  large: '5rem',
};

export const Font = {
  standard:
    '400 1em -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", "sans-serif"',
  medium:
    '400 1.333em/1.6 -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", "sans-serif"',
  mediumlarge:
    '500 1.777em -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", "sans-serif"',
  large:
    '700 2.369em -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", "sans-serif"',
};

export const SharedStyles = {
  ContentContainer: styled.div<{ widthP?: number }>`
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: ${(props) => {
      return props.widthP ?? 100;
    }}%;
    height: 100%;

    &:last-child {
      margin-bottom: ${Margin.medium};
    }
  `,

  VerticalSplit: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
  `,

  Sleeve: styled.div`
    width: 100%;
    max-height 25em;
    display: flex;
    justify-content: center;
    margin: ${Margin.medium} 0 ${Margin.medium};
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
      padding: 1em 2em;
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
  //images have a standard height of 25em, they can be scaled percentage-wise with widthP
  ImageCard: styled.img<{ widthP?: number }>`
    display: block;
    max-width: ${(props) => {
      return props.widthP ?? 40;
    }}%;
    width: ${(props) => (props.widthP != null ? '100%' : 'auto')};
    height: ${(props) => (props.widthP != null ? 'auto' : '25em')};
  `,
};
