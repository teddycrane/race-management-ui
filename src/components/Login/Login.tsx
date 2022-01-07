import {
  Card,
  CardContent,
  CardHeader,
  Divider,
} from "@mui/material";
import { Box, createTheme } from "@mui/system";
import LoginForm from "./LoginForm";
import React from "react";

export const Login = (): JSX.Element => {
  const theme = createTheme();
  return (
    <Box
      data-testid="race-management-login"
      sx={{
        paddingTop: theme.spacing(8),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          maxWidth: "md",
          width: "40%",
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardHeader title="Login" />
        <Divider />
        <CardContent sx={{ width: "90%" }}>
          <LoginForm />
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
