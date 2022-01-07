import React, { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { Box, Button, createTheme, TextField } from "@mui/material";

export const LoginForm = (): JSX.Element => {
  const theme = createTheme();
  const { control, handleSubmit, watch } = useForm({
    reValidateMode: "onChange",
  });

  const onSubmit = () => {
    alert("logged in!");
  };

  return (
    <div data-testid="race-management-login-form">
      <form>
        <Box sx={{ padding: theme.spacing(2) }}>
          <Controller
            control={control}
            name="username"
            defaultValue={""}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <TextField
                onChange={onChange}
                value={value}
                label="Username"
                fullWidth
              />
            )}
          />
        </Box>
        <Box sx={{ padding: theme.spacing(2) }}>
          <Controller
            control={control}
            name="password"
            defaultValue={""}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <TextField
                onChange={onChange}
                value={value}
                label="Password"
                type="password"
                fullWidth
              />
            )}
          />
        </Box>
        <Button variant="contained" onClick={handleSubmit(() => onSubmit())}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
