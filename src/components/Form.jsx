import React, { useMemo } from "react";
import { Box, Button, Grid, InputLabel, TextField } from "@mui/material";

const FormField = ({ label, name, multiline, required }) => {
  const multilineProps = multiline && {
    multiline: true,
    minRows: 6,
    maxRows: 12
  };

  return (
    <>
      <InputLabel htmlFor={name} sx={{ pb: 1 }}>
        {label}
        {required && "*"}
      </InputLabel>
      <TextField
        id={name}
        name={name}
        variant="outlined"
        size="large"
        fullWidth
        required={required}
        {...multilineProps}
      />
    </>
  );
};

const Form = ({ formContent }) => {
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
          />
        </Grid>
      )),
    [formContent]
  );

  return (
    <>
      <Box component="form" sx={{ padding: {xs: 2, md: 4} }}>
        <Grid
          container
          spacing={2}
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          {formFields}
          <Grid item xs={12}>
            <Button variant="contained" size="large" fullWidth>
              Submit the Form
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Form;
