import { InvestmentSimulationForm } from './models/InvestmentData';
import { ClearForm } from './clearForm.js';

export class SimulateInvestment {
    initialInvestment: number;
    monthlyInvestment: number;
    investmentPeriod: 'years' | 'months';
    investmentPeriodValue: number;
    profitabilityPeriod: 'years' | 'months';
    profitabilityValue: number;

    constructor({ initialInvestment, monthlyInvestment, investmentPeriod, profitability }: InvestmentSimulationForm) {
        this.initialInvestment = initialInvestment;
        this.monthlyInvestment = monthlyInvestment;
        this.investmentPeriod = investmentPeriod.period;
        this.investmentPeriodValue = investmentPeriod.value;
        this.profitabilityPeriod = profitability.period;
        this.profitabilityValue = profitability.value;
    }

    periodConfig(): number {
        return this.investmentPeriod === 'years'
            ? this.investmentPeriodValue * 12
            : this.investmentPeriodValue;
    }

    calculateCompoundInterest(): number {
        const timeInMonths = this.periodConfig();
        const monthlyRate = this.profitabilityValue / 100; // Convertendo % para decimal

        // Cálculo do montante inicial com juros
        const montanteInicial = this.initialInvestment * Math.pow(1 + monthlyRate, timeInMonths);

        // Cálculo do montante dos aportes mensais (se houver)
        const montanteAportes = this.monthlyInvestment > 0
            ? this.monthlyInvestment * ((Math.pow(1 + monthlyRate, timeInMonths) - 1) / monthlyRate)
            : 0;

        return montanteInicial + montanteAportes;
    }

    init(): void {
        const montanteFinal = this.calculateCompoundInterest();
        console.log(`Montante final após ${this.periodConfig()} meses: R$ ${montanteFinal.toFixed(2)}`);
        const form = new ClearForm('form', '.clearForm', 'form');
        form.init();
    }
}
