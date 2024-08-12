import React, { useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Box, Button, Grid, InputLabel, TextField } from "@mui/material";

const FormField = ({
  label,
  name,
  multiline,
  required,
  autoComplete,
  type,
  control
}) => {
  const multilineProps = multiline && {
    multiline: true,
    minRows: 6,
    maxRows: 12
  };

  const requiredValidation = required && {
    required: {
      value: true,
      message: "This form field is required"
    }
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /[0-9]/;

  const emailValidation = type === "email" && {
    pattern: {
      value: emailRegex,
      message: "Please enter a valid email address"
    }
  };

  const phoneNumberValidation = type === "tel" && {
    pattern: {
      value: phoneRegex,
      message: "Please enter a valid phone number"
    }
  };

  const validationRules = {
    rules: {
      ...requiredValidation,
      ...emailValidation,
      ...phoneNumberValidation
    }
  };

  return (
    <>
      <InputLabel htmlFor={name} sx={{ pb: 1 }}>
        {label}
        {required && "*"}
      </InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            id={name}
            name={name}
            variant="outlined"
            size="large"
            fullWidth
            required={required}
            autoComplete={autoComplete}
            type={type}
            onChange={onChange}
            value={value}
            error={!!error}
            helperText={error ? error.message : null}
            {...multilineProps}
          />
        )}
        {...validationRules}
      />
    </>
  );
};

const Form = ({ formContent }) => {
  const defaultValues = formContent.reduce(
    (obj, item) => Object.assign({ ...obj, [item.name]: item.defaultValue }),
    {}
  );

  const { handleSubmit, reset, control } = useForm({
    defaultValues: defaultValues
  });

  const formFields = useMemo(
    () =>
      formContent.map((item) => (
        <Grid
          key={item.id}
          item
          md={item.multiline || item.fullWidth ? 12 : 6}
          xs={12}
          sx={{ textAlign: "left" }}
        >
          <FormField
            label={item.label}
            name={item.name}
            multiline={item.multiline}
            required={item.required}
            autoComplete={item.autoComplete}
            type={item.type}
            control={control}
          />
        </Grid>
      )),
    [formContent]
  );

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <Box component="form" sx={{ padding: { xs: 2, md: 4 } }}>
        <Grid
          container
          spacing={2}
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          {formFields}
          <Grid item xs={12}>
            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={handleSubmit(onSubmit)}
            >
              Submit the Form
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Form;
