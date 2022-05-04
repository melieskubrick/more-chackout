import React from "react";

import {ThemeProvider} from "./theme/provider";

const AppProvider: React.FC = ({children}) => (
  <ThemeProvider>{children}</ThemeProvider>
);

export default AppProvider;

