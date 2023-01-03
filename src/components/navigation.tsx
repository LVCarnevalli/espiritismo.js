import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "gatsby";
import ThemeToggle from "./theme";
import { navigate } from "gatsby";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const title = "ESPIRITISMO";
const navItems = [
  {
    name: "QUESTÕES DINÂMICAS",
    path: "/olivrodosespiritos/dynamic",
  },
  {
    name: "QUESTÕES",
    path: "/olivrodosespiritos/common",
  },
];

const Navigation: React.FC<Props> = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: "var(--bgColor)",
        color: "var(--textColor)",
      }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link className="title" to="/">
          {title}
        </Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={`item-${item.name}`} disablePadding>
            <ListItemButton
              color="inherit"
              key={`item-btn-${item.name}`}
              className="text-base"
              onClick={() => navigate(item.path)}
            >
              {item.name}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", minHeight: "64px" }}>
      <AppBar
        component="nav"
        elevation={0}
        sx={{ backgroundColor: "var(--bgColor)", color: "var(--textColor)" }}
      >
        <Toolbar sx={{ minHeight: "64px" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            <Link className="title" to="/">
              {title}
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                color="inherit"
                key={`btn-${item.name}`}
                onClick={() => navigate(item.path)}
                className="text-sm"
              >
                {item.name}
              </Button>
            ))}
          </Box>
          <ThemeToggle />
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              backgroundColor: "var(--bgColor)",
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </Box>
  );
};

export default Navigation;
