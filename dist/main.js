console.log("Simulador de Investimentos Iniciado!");
import { Menu } from './menu.js';
import { ClearForm } from './clearForm.js';
import { getFormData } from './getDates.js';
const menu = new Menu('.menuHeader', '.hamburguerMenu');
menu.init();
const form = new ClearForm('form', '.clearForm');
form.init();
document.querySelector('#simulate')?.addEventListener('click', () => {
    const formDate = getFormData();
    console.log(formDate);
});
