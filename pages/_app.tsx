import React from "react";
import { AppProps } from "next/app";

import { ThemeProvider, theme } from "~/theme";
import { GlobalStyle } from "~/theme/global-style";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
    <style jsx global>{`
      @font-face {
        font-family: "Roboto";
        src: url("/fonts/Roboto-Regular.ttf");
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: "RobotoBold";
        src: url("/fonts/Roboto-Bold.ttf");
        font-weight: bold;
        font-style: normal;
      }

      @font-face {
        font-family: "RobotoBlack";
        src: url("/fonts/Roboto-Black.ttf");
        font-weight: normal;
        font-style: normal;
      }
    `}</style>
  </>
);

export default App;
