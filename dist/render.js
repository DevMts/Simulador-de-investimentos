export class RenderPage {
    brute;
    invested;
    profit;
    mySimulate;
    constructor(dates) {
        this.brute = dates.brute;
        this.invested = dates.invested;
        this.profit = dates.profit;
        this.mySimulate = dates.mySimulate;
    }
    logData() {
        console.log({
            brute: this.brute,
            invested: this.invested,
            profit: this.profit,
            mySimulate: this.mySimulate,
        });
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
        box.forEach((element, index) => {
            setTimeout(() => {
                element.textContent = ".";
            }, 1000 * index);
            setTimeout(() => {
                element.textContent += ".";
            }, 1500 + (1000 * index));
            setTimeout(() => {
                element.textContent += ".";
            }, 2000 + (1000 * index));
            setTimeout(() => {
                if (element === brute) {
                    element.textContent = this.brute.toLocaleString();
                }
                else if (element === invested) {
                    element.textContent = this.invested.toLocaleString();
                }
                else if (element === interest) {
                    element.textContent = this.profit.toLocaleString();
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
            }, 2500 + (1000 * index));
        });
    }
    init() {
        this.renderChart();
    }
}
