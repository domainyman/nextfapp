import React from 'react';
import { useFormikContext } from 'formik';
import { Button } from '@mui/material';

const ButtonAny = ({
  children,
  ...otherProps
}) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  }

  const configButton = {
    variant: 'contained',
    fullWidth: true,
    onClick: handleSubmit
  }

  return (
    <Button
      {...configButton}
    >
      {children}
    </Button>
  );
};

export default ButtonAny;