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
        console.log(this.profitabilityValue);
        return this.investmentPeriod === 'years'
            ? this.investmentPeriodValue * 12
            : this.investmentPeriodValue;
    }

    calculateCompoundInterest(): number {
        const timeInMonths = this.periodConfig();
        const monthlyRate = this.profitabilityPeriod === 'years'
            ? ((this.profitabilityValue / 100) + 1) ** (1 / 12) - 1
            : this.profitabilityValue / 100;
        console.log(monthlyRate);


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
    InvestmentComparison(): number[] {
        const profitabilityValues = [13.75, 11.50, 12, 10.50, 10.75, 11];
        return profitabilityValues.map(value => {
            const tempSimulate = new SimulateInvestment({
                initialInvestment: this.initialInvestment,
                monthlyInvestment: this.monthlyInvestment,
                investmentPeriod: { period: this.investmentPeriod, value: this.investmentPeriodValue },
                profitability: { period: 'years', value }
            });
            return Number(tempSimulate.calculateCompoundInterest().toFixed());
        });
    }


    init() {
        const montanteFinal = this.calculateCompoundInterest();
        const invested = this.calculateInvestmentValue();
        const profit = montanteFinal - invested;
        const comparison = this.InvestmentComparison(); // Executa só uma vez

        const form = new ClearForm('form', '.clearForm', 'form');
        form.init();

        return {
            "brute": Number(montanteFinal.toFixed(2)),
            "Invested": Number(invested.toFixed(2)),
            "Profit": Number(profit.toFixed(2)),
            "mySimulate": {
                "period": this.periodConfig(),
                "rate": this.profitabilityPeriod === 'years'
                    ? this.profitabilityValue / 12
                    : this.profitabilityValue,
                "start": this.initialInvestment,
                "monthly": this.monthlyInvestment
            },
            "comparison": comparison
        };
    }

}
