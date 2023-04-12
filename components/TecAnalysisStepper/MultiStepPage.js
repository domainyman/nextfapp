import React, { useState } from 'react';
import {
    Stepper,
    Step,
    StepLabel,
    Button,
    Typography,
    CircularProgress,
} from '@mui/material';
import { Formik, Form } from 'formik';
import Grid from '@mui/material/Unstable_Grid2';
import TecAnalyHeader from '@/components/TecAnalysisStepper/FormModel/TecAnalyHeader';
import InitializationProtfolioForm from './Form/InitializationProtfolioForm';
import AnalysisToolsForm from './Form/AnalysisToolsForm';
// import ReviewOrder from './ReviewOrder';
// import CheckoutSuccess from './CheckoutSuccess';

import validationSchema from './FormModel/MStepvalidationSchema';
import FormModel from './FormModel/MStepFormModel';
import formInitialValues from './FormModel/MStepInitialValues';

// import useStyles from './styles';

const steps = ['Initialization Protfolio', 'Technical Analysis Tools', 'Trading strategy'];
const { formId, formField } = FormModel;

function _renderStepContent(step) {
    switch (step) {
        case 0:
            return <InitializationProtfolioForm formField={formField} />;
        case 1:
            return <AnalysisToolsForm formField={formField} />;
        case 2:
            return <div>Case 3</div>;
        // return <ReviewOrder />;
        default:
            return <div>Not Found</div>;
    }
}

export default function CheckoutPage() {
    // const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const currentValidationSchema = validationSchema[activeStep];
    const isLastStep = activeStep === steps.length - 1;

    function _sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function _submitForm(values, actions) {
        await _sleep(1000);
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
        setActiveStep(activeStep + 1);
    }

    function _handleSubmit(values, actions) {
        if (isLastStep) {
            _submitForm(values, actions);
        } else {
            setActiveStep(activeStep + 1);
            actions.setTouched({});
            actions.setSubmitting(false);
        }
    }

    function _handleBack() {
        setActiveStep(activeStep - 1);
    }

    return (
        <React.Fragment>
            <TecAnalyHeader />
            <Stepper alternativeLabel activeStep={activeStep} >
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <React.Fragment>
                {activeStep === steps.length ? (
                    <div>activeStep === steps.length</div>
                ) : (
                    <Formik
                        initialValues={formInitialValues}
                        validationSchema={currentValidationSchema}
                        onSubmit={_handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Grid m={6} border={1} borderColor="error.main">
                                <Form id={formId} >
                                    {_renderStepContent(activeStep)}
                                    <Grid display="flex" justifyContent="flex-end" border={1} borderColor="error.main">
                                        {activeStep !== 0 && (
                                            <Button onClick={_handleBack}
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                            >
                                                Back
                                            </Button>
                                        )}
                                        <Button
                                            disabled={isSubmitting}
                                            type="submit"
                                            variant="contained"
                                            color="primary"

                                        >
                                            {isLastStep ? 'Analysis' : 'Next'}
                                        </Button>
                                        {/* {isSubmitting && (
                                        <CircularProgress
                                            size={24}
                                        />
                                    )} */}
                                    </Grid>
                                </Form>
                            </Grid>
                        )}
                    </Formik>
                )}
            </React.Fragment>
        </React.Fragment >
    );
}