console.log("Simulador de Investimentos Iniciado!");

import { Menu } from './menu.js';
import { ClearForm } from './clearForm.js';
import { InvestmentSimulationForm } from './models/InvestmentData.js';

import { getFormData} from './getDates.js';


// Inicializa o menu de navegação
const menu = new Menu('.menuHeader', '.hamburguerMenu');
menu.init();

// Inicializa o formulário de limpeza
const form = new ClearForm('form', '.clearForm');
form.init();

document.querySelector('#simulate')?.addEventListener('click', () => {
    const formDate: InvestmentSimulationForm = getFormData()
    console.log(formDate);
})