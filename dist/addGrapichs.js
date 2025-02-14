let chartInstance = null;
export class AddGraphics {
    initialInvestment;
    monthlyInvestment;
    investmentPeriod;
    profitability;
    constructor(data) {
        this.initialInvestment = data.initialInvestment;
        this.monthlyInvestment = data.monthlyInvestment;
        this.investmentPeriod = data.investmentPeriod;
        this.profitability = data.profitability;
    }
    init() {
        this.createChart(this.transformValueInvestments(), this.transformValuePeriods());
        return this.transformValueInvestments(), this.transformValuePeriods();
    }
    transformValuePeriods() {
        const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
        const currentMonth = new Date().getMonth();
        const periodMonths = this.periodConfig();
        let periodRight = [];
        for (let i = 0; i < periodMonths; i++) {
            periodRight.push(months[(currentMonth + i) % 12]);
        }
        return periodRight;
    }
    periodConfig() {
        return this.investmentPeriod.period === "years"
            ? this.investmentPeriod.value * 12
            : this.investmentPeriod.value;
    }
    transformValueInvestments() {
        const investido = [];
        const comJuros = [];
        const totalPeriods = this.periodConfig();
        const interestRate = this.profitability.period === "years"
            ? ((this.profitability.value / 100) + 1) ** (1 / 12) - 1
            : this.profitability.value / 100;
        let currentInvestment = this.initialInvestment;
        let currentValueWithInterest = this.initialInvestment;
        for (let i = 0; i < totalPeriods; i++) {
            currentInvestment += this.monthlyInvestment;
            investido.push(currentInvestment);
            currentValueWithInterest = currentValueWithInterest * (1 + interestRate) + this.monthlyInvestment;
            comJuros.push(Number(currentValueWithInterest.toFixed(2)));
        }
        return { investido, comJuros };
    }
    createChart(values, period) {
        const canvas = document.getElementById("myChart");
        const ctx = canvas.getContext("2d");
        if (!ctx) {
            console.error("Erro ao obter contexto do canvas!");
            return;
        }
        if (chartInstance) {
            chartInstance.destroy();
        }
        chartInstance = new Chart(ctx, {
            type: "line",
            data: {
                labels: period,
                datasets: [
                    {
                        label: "Investido",
                        data: values.investido,
                        backgroundColor: "rgba(42, 157, 143, 0.2)",
                        borderColor: "rgba(42, 157, 143, 1)",
                        borderWidth: 2,
                        fill: true,
                    },
                    {
                        label: "Com Juros",
                        data: values.comJuros,
                        backgroundColor: "rgba(231, 111, 81, 0.2)",
                        borderColor: "rgba(231, 111, 81, 1)",
                        borderWidth: 2,
                        fill: true,
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: "top" },
                    tooltip: { mode: "index", intersect: false },
                },
                scales: {
                    x: { title: { display: true, text: "Período" } },
                    y: { title: { display: true, text: "Valor (R$)" }, beginAtZero: true },
                },
            },
        });
    }
}
