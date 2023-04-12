import React from 'react';
import { Box, Typography,InputAdornment} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { InputField, CheckboxField, SelectField } from '../../FormFields'
import timeperioddata from "/data/TecAnalysis/timeperiod"
import startyeardata from "/data/TecAnalysis/startyear"
import endyeardata from "/data/TecAnalysis/endyear"

export default function InitializationProtfolioForm(props) {
  const {
    formField: {
      portfolioNames,
      tickerSymbol,
      timeperiod,
      startyear,
      endyear,
      Initialamount,
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
        <Grid item xs={12} sm={6}>
          <SelectField
            name={timeperiod.name}
            label={timeperiod.label}
            data={timeperioddata}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={startyear.name}
            label={startyear.label}
            data={startyeardata}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={endyear.name}
            label={endyear.label}
            data={endyeardata}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField 
          name={Initialamount.name} 
          label={Initialamount.label} 
          size="small" 
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">$</InputAdornment>)
          }} 
          fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

