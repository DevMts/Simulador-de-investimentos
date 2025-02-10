export interface InvestmentSimulationForm {
    initialInvestment: number;
    monthlyInvestment: number;
    investmentPeriod: {
        period: 'years' | 'months';
        value: number;
    };
    profitability: {
        period: 'years' | 'months';
        value: number;
    };
}
