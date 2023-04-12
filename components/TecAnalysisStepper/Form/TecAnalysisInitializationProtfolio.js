import { Box, Container, Typography, useTheme, Stepper, Step, StepLabel, InputAdornment } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import { Form, Formik } from 'formik'
import * as Yup from "yup"
import React from "react"
import FormikControl from "../../FormikPlug/FormikControl"
import { tokens } from "../../Layout/Theme"
import SubmitAny from "../../FormikPlug/FormikSubmit"
import timeperiod from "/data/TecAnalysis/timeperiod.json"
import startyear from "/data/TecAnalysis/startyear.json"
import endyear from "/data/TecAnalysis/endyear.json"
import inclytd from "/data/TecAnalysis/inclytd.json"
import cashflow from "/data/TecAnalysis/cashflow.json"
import rebalancing from "/data/TecAnalysis/rebalancing.json"
import leveragetype from "/data/TecAnalysis/leveragetype.json"
import reinvestdividends from "/data/TecAnalysis/reinvestdividends.json"
import displayincome from "/data/TecAnalysis/displayincome.json"

const TecAnalysis = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const initialValues = {
        names: "",
        tickersymbol: "",
        timeperiod: "",
        startyear: "",
        endyear: "",
        inclytd: "",
        amount: "",
        cashflows: "",
        rebalancing: "",
        leveragetype: "",
        reinvestdividends: "",
        displayincome: "",
    }
    const validationSchema = Yup.object().shape({
        names: Yup.string().required('Required'),
        tickersymbol: Yup.string().required('Required'),
        timeperiod: Yup.string().required('Required'),
        startyear: Yup.string().required('Required'),
        endyear: Yup.string().required('Required'),
        inclytd: Yup.string().required('Required'),
        amount: Yup.number().required('Required'),
        cashflows: Yup.string().required('Required'),
        rebalancing: Yup.string().required('Required'),
        leveragetype: Yup.string().required('Required'),
        reinvestdividends: Yup.string().required('Required'),
        displayincome: Yup.string().required('Required'),
    })
    const onSubmit = values => {
        console.log("Form data", values)
        console.log("Saved data", JSON.parse(JSON.stringify(values)))
    }
    return (
        <Grid display="flex" >
            <Container maxWidth="xl" >
                <Box display="flex" maxWidth={600} alignItems="center" justifyContent="center" margin="auto">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {(formik) => <Form onSubmit={formik.handleSubmit}>
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <Typography variant="h6" textAlign="center">
                                        Portfolio Names :
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormikControl
                                        control="input"
                                        name="names"
                                        label="Names"
                                        size="small"
                                        variant="outlined"
                                        id="adornment-Names"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="h6" textAlign="center">
                                        Ticker Symbol :
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormikControl
                                        control="input"
                                        name="tickersymbol"
                                        label="Ticker Symbol"
                                        size="small"
                                        variant="outlined"
                                        id="adornment-TickerSymbol"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="h6" textAlign="center">
                                        Time Period :
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormikControl
                                        control="select"
                                        name="timeperiod"
                                        options={timeperiod}
                                        label="Time Period"
                                        variant="outlined"
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="h6" textAlign="center">
                                        Start Year :
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormikControl
                                        control="select"
                                        name="startyear"
                                        options={startyear}
                                        label="Start Year"
                                        variant="outlined"
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="h6" textAlign="center">
                                        End Year :
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormikControl
                                        control="select"
                                        name="endyear"
                                        options={endyear}
                                        label="End Year"
                                        variant="outlined"
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="h6" textAlign="center">
                                        Include YTD :
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormikControl
                                        control="select"
                                        name="inclytd"
                                        options={inclytd}
                                        label="Include YTD"
                                        variant="outlined"
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="h6" textAlign="center">
                                        Initial Amount :
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormikControl
                                        control="input"
                                        name="amount"
                                        label="Amount"
                                        size="small"
                                        variant="outlined"
                                        id="adornment-amount"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">$</InputAdornment>)
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="h6" textAlign="center">
                                        Cashflows :
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormikControl
                                        control="select"
                                        name="cashflows"
                                        options={cashflow}
                                        label="Cashflows"
                                        variant="outlined"
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="h6" textAlign="center">
                                        Rebalancing :
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormikControl
                                        control="select"
                                        name="rebalancing"
                                        options={rebalancing}
                                        label="Rebalancing"
                                        variant="outlined"
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="h6" textAlign="center">
                                        Leverage Type :
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormikControl
                                        control="select"
                                        name="leveragetype"
                                        options={leveragetype}
                                        label="Leverage Type"
                                        variant="outlined"
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="h6" textAlign="center">
                                        Reinvest Dividends :
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormikControl
                                        control="select"
                                        name="reinvestdividends"
                                        options={reinvestdividends}
                                        label="Reinvest Dividends"
                                        variant="outlined"
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="h6" textAlign="center">
                                        Display Income :
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormikControl
                                        control="select"
                                        name="displayincome"
                                        options={displayincome}
                                        label="Display Income"
                                        variant="outlined"
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <SubmitAny>
                                        Submit Analysis
                                    </SubmitAny>
                                </Grid>
                            </Grid>
                        </Form>}
                    </Formik>
                </Box>
            </Container >
        </Grid >
    )
}

export default TecAnalysis
