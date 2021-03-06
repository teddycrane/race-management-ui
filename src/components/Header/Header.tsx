import { AppBar, Container, Link, Toolbar } from "@mui/material";
import React from "react";

export const Header = (): JSX.Element => {
  return (
    <AppBar position="static" data-testid="race-management-header">
      <Container maxWidth="xl" disableGutters>
        <Toolbar disableGutters>
          <Link href="/" variant="h6" color="inherit">
            Race Management
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
