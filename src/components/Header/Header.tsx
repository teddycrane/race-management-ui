import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { Link, useNavigate } from "react-router-dom";
import React from "react";

export const Header = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <AppBar position="static" data-testid="race-management-header">
      <Container maxWidth="xl" disableGutters>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link to="/">
            <Typography variant="h6" color="inherit">
              Race Management
            </Typography>
          </Link>
          <IconButton onClick={() => navigate("/login")}>
            <LoginIcon color="inherit" />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
