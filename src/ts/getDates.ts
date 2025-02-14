import { InvestmentSimulationForm } from './models/InvestmentData';

export const getFormData = (): InvestmentSimulationForm | any => {
    const form = document.querySelector('form') as HTMLFormElement;

    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());

    const returnForm: InvestmentSimulationForm = {
        initialInvestment: Number(formValues.initialInvestment),
        monthlyInvestment: Number(formValues.monthlyInvestment),
        investmentPeriod: {
            period: formValues.investmentPeriodperiod as 'years' | 'months',
            value: Number(formValues.investmentPeriodvalue),
        },
        profitability: {
            period: formValues.profitabilityPeriod as 'years' | 'months',
            value: Number(formValues.profitabilityValue),
        }
    }
    return returnForm;
}