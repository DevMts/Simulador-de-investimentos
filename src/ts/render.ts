import { elements } from '../../node_modules/chart.js/dist/index';
import { InvestmentSimulationForm } from './models/InvestmentData';
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
// }
// const dates: {
//     brute: number;
//     Invested: number;
//     Profit: number;
//     mySimulate: {
//         period: number;
//         rate: number;
//         start: number;
//         monthly: number;
//     };
// }
export class RenderPage {
    private brute: number;
    private invested: number;
    private profit: number;
    private mySimulate: {
        period: number;
        rate: number;
        start: number;
        monthly: number;
    };

    constructor(dates: {
        brute: number;
        invested: number;
        profit: number;
        mySimulate: {
            period: number;
            rate: number;
            start: number;
            monthly: number;
        };
    }) {
        this.brute = dates.brute;
        this.invested = dates.invested;
        this.profit = dates.profit;
        this.mySimulate = dates.mySimulate;
    }

    public logData(): void {
        console.log({
            brute: this.brute,
            invested: this.invested,
            profit: this.profit,
            mySimulate: this.mySimulate,
        });
    }

    public renderChart(): void {
        // Elements to be updated with the animation
        const brute = document.querySelector('#brute') as HTMLElement;
        const invested = document.querySelector('#invested') as HTMLElement;
        const interest = document.querySelector('#interest') as HTMLElement;

        const InvStart = document.querySelector('#initialInvestmentResult') as HTMLElement;
        const InvEnd = document.querySelector('#monthlyInvestmentResult') as HTMLElement;
        const period = document.querySelector('#period') as HTMLElement;
        const rate = document.querySelector('#rentability') as HTMLElement;

        // Array of elements to animate and update
        const box = [InvStart, InvEnd, period, rate, brute, invested, interest];

        box.forEach((element, index) => {
            // Animate the dots
            setTimeout(() => {
                element.textContent = "."; // One dot
            }, 1000 * index); // Staggered timing for each element

            setTimeout(() => {
                element.textContent += "."; // Two dots
            }, 1500 + (1000 * index));

            setTimeout(() => {
                element.textContent += "."; // Three dots
            }, 2000 + (1000 * index));

            // After 3 seconds, update the text with the values
            setTimeout(() => {
                if (element === brute) {
                    element.textContent = this.brute.toLocaleString();
                } else if (element === invested) {
                    element.textContent = this.invested.toLocaleString();
                } else if (element === interest) {
                    element.textContent = this.profit.toLocaleString();
                } else if (element === InvStart) {
                    element.textContent = this.mySimulate.start.toLocaleString();
                } else if (element === InvEnd) {
                    element.textContent = this.mySimulate.monthly.toLocaleString();
                } else if (element === period) {
                    element.textContent = this.mySimulate.period.toLocaleString();
                } else if (element === rate) {
                    element.textContent = this.mySimulate.rate.toLocaleString();
                }
            }, 2500 + (1000 * index));
        });
    }


    public init() {
        this.renderChart();
    }

    // Métodos adicionais podem ser implementados aqui
}
