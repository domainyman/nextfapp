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

export default {
  [portfolioNames.name]: '',
  [tickerSymbol.name]: '',
  [timeperiod.name]: '',
  [startyear.name]: '',
  [endyear.name]: '',
  [Initialamount.name]: '',
};
