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
        const monthlyRate = this.profitabilityPeriod === 'years'
            ? (this.profitabilityValue / 100) / 12
            : this.profitabilityValue / 100;

        const montanteInicial = this.initialInvestment * Math.pow(1 + monthlyRate, timeInMonths);

        const montanteAportes = this.monthlyInvestment > 0
            ? this.monthlyInvestment * ((Math.pow(1 + monthlyRate, timeInMonths) - 1) / monthlyRate)
            : 0;

        return montanteInicial + montanteAportes;
    }
    calculateInvestmentValue(): number {
        return this.initialInvestment + this.monthlyInvestment * this.periodConfig();
    }
    calculateProfit(): number {
        return this.calculateCompoundInterest() - this.calculateInvestmentValue();
    }

    init() {
        const montanteFinal = this.calculateCompoundInterest();
        console.log(`Montante final após ${this.periodConfig()} meses: R$ ${montanteFinal.toFixed(2)}`);
        console.log(`Valor total investido: R$ ${this.calculateInvestmentValue().toFixed(2)}`);
        console.log(`Lucro obtido: R$ ${this.calculateProfit().toFixed(2)}`)

        const form = new ClearForm('form', '.clearForm', 'form');
        form.init();
        return {
            "brute": Number(montanteFinal.toFixed(2)),
            "Invested": Number(this.calculateInvestmentValue().toFixed(2)),
            "Profit": Number(this.calculateProfit().toFixed(2)),
            "mySimulate": {
                "period": this.periodConfig(),
                "rate": this.profitabilityPeriod === 'years'
                    ? (this.profitabilityValue) / 12
                    : this.profitabilityValue,
                "start": this.initialInvestment,
                "monthly": this.monthlyInvestment
            }
        }
    }
}
