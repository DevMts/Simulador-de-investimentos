export class RenderPage {
    brute;
    invested;
    profit;
    mySimulate;
    comparison;
    constructor(dates) {
        this.brute = dates.brute;
        this.invested = dates.invested;
        this.profit = dates.profit;
        this.mySimulate = dates.mySimulate;
        this.comparison = dates.comparison;
    }
    renderChart() {
        const brute = document.querySelector('#brute');
        const invested = document.querySelector('#invested');
        const interest = document.querySelector('#interest');
        const InvStart = document.querySelector('#initialInvestmentResult');
        const InvEnd = document.querySelector('#monthlyInvestmentResult');
        const period = document.querySelector('#period');
        const rate = document.querySelector('#rentability');
        const box = [InvStart, InvEnd, period, rate, brute, invested, interest];
        box.forEach((element) => {
            if (element === brute) {
                element.textContent = 'R$ ' + this.brute.toLocaleString();
            }
            else if (element === invested) {
                element.textContent = 'R$ ' + this.invested.toLocaleString();
            }
            else if (element === interest) {
                element.textContent = 'R$ ' + this.profit.toLocaleString();
            }
            else if (element === InvStart) {
                element.textContent = this.mySimulate.start.toLocaleString();
            }
            else if (element === InvEnd) {
                element.textContent = this.mySimulate.monthly.toLocaleString();
            }
            else if (element === period) {
                element.textContent = this.mySimulate.period.toLocaleString();
            }
            else if (element === rate) {
                element.textContent = this.mySimulate.rate.toLocaleString();
            }
        });
        const tesouroSelic = document.getElementById('tesouroSelic');
        const tesouroPre2029 = document.getElementById('tesouroPre2029');
        const cdbFixo = document.getElementById('cdbFixo');
        const lciLca = document.getElementById('lciLca');
        const criCra = document.getElementById('criCra');
        const debentures = document.getElementById('debentures');
        const comparison = [tesouroSelic, tesouroPre2029, cdbFixo, lciLca, criCra, debentures];
        comparison.forEach((element, index) => {
            element.textContent = this.comparison[index].toLocaleString();
        });
    }
    init() {
        this.renderChart();
    }
}
