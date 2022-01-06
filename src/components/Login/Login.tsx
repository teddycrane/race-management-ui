import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import { Box, createTheme } from "@mui/system";
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
        <CardContent>
          <Typography variant="body2">Race management </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
