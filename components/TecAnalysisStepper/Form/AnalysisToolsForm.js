import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { InputField, CheckboxField, SelectField } from '../../FormFields'


export default function AnalysisToolsForm(props) {
  const {
    formField: {
      portfolioNames,
      tickerSymbol,
    }
  } = props;
  return (
    <React.Fragment>
      <Grid container spacing={3} direction="column" justifyContent="space-evenly" alignItems="center" >
          <Grid item xs={12} sm={6}>
            <InputField name={portfolioNames.name} label={portfolioNames.label} size="small" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField name={tickerSymbol.name} label={tickerSymbol.label} size="small" fullWidth />
          </Grid>
      </Grid>
    </React.Fragment>
  );
}