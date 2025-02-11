import { ClearForm } from './clearForm.js';
export class SimulateInvestment {
    initialInvestment;
    monthlyInvestment;
    investmentPeriod;
    investmentPeriodValue;
    profitabilityPeriod;
    profitabilityValue;
    constructor({ initialInvestment, monthlyInvestment, investmentPeriod, profitability }) {
        this.initialInvestment = initialInvestment;
        this.monthlyInvestment = monthlyInvestment;
        this.investmentPeriod = investmentPeriod.period;
        this.investmentPeriodValue = investmentPeriod.value;
        this.profitabilityPeriod = profitability.period;
        this.profitabilityValue = profitability.value;
    }
    periodConfig() {
        return this.investmentPeriod === 'years'
            ? this.investmentPeriodValue * 12
            : this.investmentPeriodValue;
    }
    calculateCompoundInterest() {
        const timeInMonths = this.periodConfig();
        const monthlyRate = this.profitabilityValue / 100;
        const montanteInicial = this.initialInvestment * Math.pow(1 + monthlyRate, timeInMonths);
        const montanteAportes = this.monthlyInvestment > 0
            ? this.monthlyInvestment * ((Math.pow(1 + monthlyRate, timeInMonths) - 1) / monthlyRate)
            : 0;
        return montanteInicial + montanteAportes;
    }
    init() {
        const montanteFinal = this.calculateCompoundInterest();
        console.log(`Montante final após ${this.periodConfig()} meses: R$ ${montanteFinal.toFixed(2)}`);
        const form = new ClearForm('form', '.clearForm', 'form');
        form.init();
    }
}
