export const getFormData = () => {
    const form = document.querySelector('form');
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());
    console.log('formValues', formValues);
    const returnForm = {
        initialInvestment: Number(formValues.initialInvestment),
        monthlyInvestment: Number(formValues.monthlyInvestment),
        investmentPeriod: {
            period: formValues.investmentPeriodperiod,
            value: Number(formValues.investmentPeriodvalue),
        },
        profitability: {
            period: formValues.profitabilityPeriod,
            value: Number(formValues.profitabilityValue),
        }
    };
    return returnForm;
};
