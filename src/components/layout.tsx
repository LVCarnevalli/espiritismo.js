// https://www.codeconcisely.com/posts/how-to-add-navigation-in-gatsby/

import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Navigation from "./navigation";

interface Props {
  children: any;
}

const Layout: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Navigation />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {props.children}
      </Box>
    </>
  );
};

export default Layout;
