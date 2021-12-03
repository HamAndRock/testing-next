import { createGlobalStyle } from "~/theme";

import { base } from "./global/base";
import { reset } from "./global/reset";
import { slick } from "./global/slick";

const GlobalStyle = createGlobalStyle`
	${reset}
	${base}
	${slick}
`;

export { GlobalStyle };
