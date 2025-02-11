console.log("Simulador de Investimentos Iniciado!");
import { Menu } from './menu.js';
import { ClearForm } from './clearForm.js';
import { SimulateInvestment } from './simulateInit.js';
import { getFormData } from './getDates.js';
const menu = new Menu('.menuHeader', '.hamburguerMenu');
menu.init();
const form = new ClearForm('form', '.clearForm', 'btn');
form.init();
let formDate;
document.querySelector('#simulate')?.addEventListener('click', () => {
    formDate = getFormData();
    console.log(formDate);
    const simulate = new SimulateInvestment(formDate);
    simulate.init();
});
