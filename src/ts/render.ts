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
    private comparison: number[]

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
        comparison: number[]
    }) {
        this.brute = dates.brute;
        this.invested = dates.invested;
        this.profit = dates.profit;
        this.mySimulate = dates.mySimulate;
        this.comparison = dates.comparison;
    }

    public renderChart(): void {
        const brute = document.querySelector('#brute') as HTMLElement;
        const invested = document.querySelector('#invested') as HTMLElement;
        const interest = document.querySelector('#interest') as HTMLElement;

        const InvStart = document.querySelector('#initialInvestmentResult') as HTMLElement;
        const InvEnd = document.querySelector('#monthlyInvestmentResult') as HTMLElement;
        const period = document.querySelector('#period') as HTMLElement;
        const rate = document.querySelector('#rentability') as HTMLElement;

        const box = [InvStart, InvEnd, period, rate, brute, invested, interest];

        box.forEach((element) => {

            if (element === brute) {
                element.textContent = 'R$ ' + this.brute.toLocaleString();
            } else if (element === invested) {
                element.textContent = 'R$ ' + this.invested.toLocaleString();
            } else if (element === interest) {
                element.textContent = 'R$ ' + this.profit.toLocaleString();
            } else if (element === InvStart) {
                element.textContent = this.mySimulate.start.toLocaleString();
            } else if (element === InvEnd) {
                element.textContent = this.mySimulate.monthly.toLocaleString();
            } else if (element === period) {
                element.textContent = this.mySimulate.period.toLocaleString();
            } else if (element === rate) {
                element.textContent = this.mySimulate.rate.toLocaleString();
            }
        });

        const tesouroSelic = document.getElementById('tesouroSelic') as HTMLElement;
        const tesouroPre2029 = document.getElementById('tesouroPre2029') as HTMLElement;
        const cdbFixo = document.getElementById('cdbFixo') as HTMLElement;
        const lciLca = document.getElementById('lciLca') as HTMLElement;
        const criCra = document.getElementById('criCra') as HTMLElement;
        const debentures = document.getElementById('debentures') as HTMLElement;
        const comparison = [tesouroSelic, tesouroPre2029, cdbFixo, lciLca, criCra, debentures];
        comparison.forEach((element, index) => {
            element.textContent = this.comparison[index].toLocaleString();
        })
    }

    public init() {
        this.renderChart();
    }
}
