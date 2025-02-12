import { InvestmentSimulationForm } from "./models/InvestmentData";
// interface InvestmentSimulationForm {
//     initialInvestment: number;
//     monthlyInvestment: number;
//     investmentPeriod: {
//         period: 'years' | 'months';
//         value: number;
//     };
//     profitability: {
//         period: 'years' | 'months';
//         value: number;
//     };
// // }
export class AddGraphics {
    private initialInvestment: number;
    private monthlyInvestment: number;
    private investmentPeriod: { period: "years" | "months"; value: number };
    private profitability: { period: "years" | "months"; value: number };
    private chart: typeof Chart | null = null;

    constructor(data: InvestmentSimulationForm) {
        this.initialInvestment = data.initialInvestment;
        this.monthlyInvestment = data.monthlyInvestment;
        this.investmentPeriod = data.investmentPeriod;
        this.profitability = data.profitability;
    }

    public logData(): void {
        console.log({
            initialInvestment: this.initialInvestment,
            monthlyInvestment: this.monthlyInvestment,
            investmentPeriod: this.investmentPeriod,
            profitability: this.profitability,
        });
    }

    init() {
        this.logData();
        this.createChart(this.transformValueInvestments(), this.transformValuePeriods());
    }

    transformValuePeriods(): string[] {
        const months = [
            "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
            "Jul", "Ago", "Set", "Out", "Nov", "Dez"
        ];

        const currentMonth: number = new Date().getMonth();
        const periodMonths: number = this.periodConfig();

        console.log("Mês atual:", months[currentMonth]);
        console.log("Período configurado:", periodMonths);

        let periodRight: string[] = [];

        for (let i = 0; i < periodMonths; i++) {
            const monthIndex = (currentMonth + i) % 12;
            console.log(months[monthIndex]);
            periodRight.push(months[monthIndex]);
        }
        console.log(periodRight);
        return periodRight;
    }

    periodConfig(): number {
        return this.investmentPeriod.period === 'years'
            ? this.investmentPeriod.value * 12
            : this.investmentPeriod.value;
    }

    transformValueInvestments(): { investido: number[], comJuros: number[] } {
        const investido: number[] = [];
        const comJuros: number[] = [];

        const totalPeriods: number = this.periodConfig(); 
        const interestRate: number = this.profitability.period === 'years'
            ? this.profitability.value / 12 / 100 
            : this.profitability.value / 100;

        let currentInvestment = this.initialInvestment;
        let currentValueWithInterest = this.initialInvestment;

        for (let i = 0; i < totalPeriods; i++) {
            currentInvestment += this.monthlyInvestment; 
            investido.push(currentInvestment);

            currentValueWithInterest = currentValueWithInterest * (1 + interestRate) + this.monthlyInvestment;
            comJuros.push(Number(currentValueWithInterest.toFixed(2))); 
        }

        console.log("Valores Investidos:", investido);
        console.log("Valores com Juros:", comJuros);

        return { investido, comJuros }
    }

    createChart(values: { investido: number[], comJuros: number[] }, period: string[]): void {
        const ctx = (document.getElementById('myChart') as HTMLCanvasElement).getContext('2d');

        if (this.chart) {
            this.chart.destroy();
        }

        // Agora cria o novo gráfico
        this.chart = new Chart(ctx!, {
            type: 'line',
            data: {
            labels: period,
            datasets: [
                {
                label: 'Investido',
                data: values.investido,
                backgroundColor: 'rgba(42, 157, 143, 0.2)',
                borderColor: 'rgba(42, 157, 143, 1)',
                borderWidth: 2,
                fill: true,
                },
                {
                label: 'Com Juros',
                data: values.comJuros,
                backgroundColor: 'rgba(231, 111, 81, 0.2)',
                borderColor: 'rgba(231, 111, 81, 1)',
                borderWidth: 2,
                fill: true,
                },
            ],
            },
            options: {
                
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                tooltip: { mode: 'index', intersect: false },
            },
            scales: {
                x: { title: { display: true, text: 'Período' } },
                y: { title: { display: true, text: 'Valor (R$)' }, beginAtZero: true },
            },
            },
        });
    }
}
