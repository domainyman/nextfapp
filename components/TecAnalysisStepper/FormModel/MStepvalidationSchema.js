import * as Yup from 'yup';
import MStepFormModel from './MStepFormModel';
const {
    formField: {
        portfolioNames,
        tickerSymbol,
        timeperiod,
        startyear,
        endyear,
        Initialamount,
    }
} = MStepFormModel;

export default [
    Yup.object().shape({
        [portfolioNames.name]: Yup.string().required(`${portfolioNames.requiredErrorMsg}`),
        [tickerSymbol.name]: Yup.string().required(`${tickerSymbol.requiredErrorMsg}`),
        [timeperiod.name]: Yup.string().required(`${timeperiod.requiredErrorMsg}`),
        [startyear.name]: Yup.string().required(`${startyear.requiredErrorMsg}`),
        [endyear.name]: Yup.string().required(`${endyear.requiredErrorMsg}`),
        [Initialamount.name]: Yup.number().required(`${Initialamount.requiredErrorMsg}`),
    })
];

