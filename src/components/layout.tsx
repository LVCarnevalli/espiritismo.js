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
      <Box
        component="main"
        className="h-full flex flex-col dark:bg-neutral-900 dark:text-white"
      >
        <Box>
          <Navigation />
        </Box>
        <Box px={{ xs: 3 }} pt={{ xs: 3 }} className="h-full">
          {props.children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
