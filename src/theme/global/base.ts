import { css } from "~/src/theme";

const base = css`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: ${({ theme }) => theme.fonts.initialFontSize}px;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.font};
    color: ${({ theme }) => theme.colors.darkBlue};
    overflow-x: hidden;
  }

  a {
    color: ${({ theme }) => theme.colors.orange};

    &:hover {
      text-decoration: none;
    }
  }
`;

export { base };
