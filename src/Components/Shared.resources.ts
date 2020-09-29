import styled from 'styled-components';

export const Margin = {
  small: '1rem',
  medium: '3rem',
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
  ContentContainer: styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;

    &:last-child {
      margin-bottom: ${Margin.medium};
    }
  `,

  Sleeve: styled.div<{ vertical?: boolean }>`
    width: 100%;
    max-height 25em;
    display: flex;
    flex-direction: ${(p) => (p.vertical ? 'column' : 'row')};
    justify-content: center;
    margin: 0 0 ${Margin.medium};
  `,

  TextCard: {
    Heading: styled.div`
      text-decoration: underline double;
      font: ${Font.large};
      text-align: center;
      margin: ${Margin.small} ${Margin.small} ${Margin.large};
      width: auto;
    `,
    Prose: styled.div<{ widthP?: number }>`
      text-align: justify;
      font: ${Font.medium};
      padding: 1em 2%;
      width: ${(p) => p.widthP ?? 90}%;
      background-color: white;
      display: flex;
      align-items: center;
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
    align-self: center;
    max-width: ${(props) => {
      return props.widthP ?? 50;
    }}%;
    width: ${(props) => (props.widthP != null ? '100%' : 'auto')};
    height: ${(props) => (props.widthP != null ? '100%' : '25em')};
  `,
};
