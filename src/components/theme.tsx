import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import IconButton from "@mui/material/IconButton";

const Plugin = require("gatsby-plugin-dark-mode");

const ThemeToggler: React.FC = () => {
  return (
    <Plugin.ThemeToggler>
      {({ theme, toggleTheme }: any) => (
        <IconButton
          sx={{ marginLeft: "auto" }}
          size="medium"
          aria-label="theme"
          onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
        >
          <DarkModeIcon
            className={theme === "light" ? "text-black" : "text-white"}
          />
        </IconButton>
      )}
    </Plugin.ThemeToggler>
  );
};

export default ThemeToggler;
