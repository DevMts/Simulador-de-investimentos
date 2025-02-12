console.log("Simulador de Investimentos Iniciado!");
//CLasses
import { Menu } from './menu.js';
import { ClearForm } from './clearForm.js';
import { SimulateInvestment } from './simulateInit.js';
import { AddGraphics } from './addGrapichs.js';
import { RenderPage } from './render.js';

// Fuctions Auxiliares
import { getFormData } from './getDates.js';

// Interfaces
import { InvestmentSimulationForm } from './models/InvestmentData.js';

// Inicializa o menu de navegação
const menu = new Menu('.menuHeader', '.hamburguerMenu');
menu.init();

// Inicializa o formulário de limpeza
const form = new ClearForm('form', '.clearForm', 'btn');
form.init();

let formDate: InvestmentSimulationForm
document.querySelector('#simulate')?.addEventListener('click', () => {
    formDate = getFormData()
    console.log(formDate);
    const simulate = new SimulateInvestment(formDate);
    const dates = {
        brute: simulate.init().brute,
        invested: simulate.init().Invested,
        profit: simulate.init().Profit,
        mySimulate: simulate.init().mySimulate
    };
    const addGraphics = new AddGraphics(formDate);
    addGraphics.init();
    const newRender = new RenderPage(dates);
    newRender.init();
})
