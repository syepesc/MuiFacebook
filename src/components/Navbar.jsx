import Notifications from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const SearchBar = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        {/* icon when device has small screen */}
        <MenuIcon sx={{ display: { xs: "block", sm: "none" } }} />

        {/* logo when device has big screen */}
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          LOGO
        </Typography>

        <SearchBar>
          <InputBase placeholder="search..."></InputBase>
        </SearchBar>

        {/* stack when device has big screen */}
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            alt="Aurelio"
            src={
              process.env.PUBLIC_URL +
              "/assets/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg"
            }
            sx={{ width: 35, height: 35 }}
            onClick={() => setOpen(true)}
          />
        </Stack>

        {/* stack when device has small screen */}
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{ display: { xs: "flex", sm: "none" } }}
        >
          <Avatar
            alt="Aurelio"
            src="../../public/assets/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg"
            sx={{ width: 35, height: 35 }}
            onClick={() => setOpen(true)}
          />
          <Typography variant="span">Aurelio</Typography>
        </Stack>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
