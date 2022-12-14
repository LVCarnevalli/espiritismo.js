// https://www.codeconcisely.com/posts/how-to-add-navigation-in-gatsby/

import * as React from "react";
import Box from "@mui/material/Box";
import Navigation from "./navigation";

interface Props {
  children: any;
}

const Layout: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Box component="main" className="h-full flex flex-col">
        <Box>
          <Navigation />
        </Box>
        <Box p={{ xs: 3, sm: 4 }} className="flex-auto">
          {props.children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
