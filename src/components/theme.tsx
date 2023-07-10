import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import IconButton from "@mui/material/IconButton";

const ReactHelmet = require("react-helmet");
const DarkMode = require("gatsby-plugin-dark-mode");

const ThemeToggler: React.FC = () => {
  return (
    <DarkMode.ThemeToggler>
      {({ theme, toggleTheme }: any) => (
        <>
          <ReactHelmet.Helmet>
            <meta
              name="theme-color"
              content={theme === "light" ? "#f9f7f1" : "#171717"}
            />
          </ReactHelmet.Helmet>
          <IconButton
            className={theme === "light" ? "text-black" : "text-white"}
            size="medium"
            aria-label="theme"
            color="inherit"
            onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
          >
            <DarkModeIcon color="inherit" />
          </IconButton>
        </>
      )}
    </DarkMode.ThemeToggler>
  );
};

export default ThemeToggler;
