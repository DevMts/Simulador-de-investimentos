console.log("Simulador de Investimentos Iniciado!");
import { Menu } from './menu.js';
import { clearForm } from './clearForm.js';

const menu = new Menu('.menuHeader', '.hamburguerMenu');
menu.init();

const form = new clearForm('form', '.clearForm');
form.init();