import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "gatsby";
import ThemeToggle from "./theme";
import DocSearch from "./docsearch";

const title = "ESPIRITISMO";

const Navigation: React.FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        elevation={0}
        sx={{
          backgroundColor: "var(--bgColor)",
          color: "var(--textColor)",
          zIndex: 199,
        }}
      >
        <Toolbar sx={{ minHeight: "64px" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
            }}
          >
            <Link className="title" to="/">
              {title}
            </Link>
          </Typography>
          <Box sx={{ marginLeft: "auto", display: "inline-flex" }}>
            <DocSearch />
            <ThemeToggle />
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
};

export default Navigation;
