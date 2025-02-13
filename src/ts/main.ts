import { Menu } from "./menu.js";
import { ClearForm } from "./clearForm.js";
import { SimulateInvestment } from "./simulateInit.js";
import { AddGraphics } from "./addGrapichs.js";
import { RenderPage } from "./render.js";
import { getFormData } from "./getDates.js";
import { gerarPDF } from "./pdfDownload.js";
import { InvestmentSimulationForm } from "./models/InvestmentData.js";

console.log("Simulador de Investimentos Iniciado!");

// Inicializa o menu de navegação
const menu = new Menu(".menuHeader", ".hamburguerMenu");
menu.init();

// Inicializa o formulário de limpeza
const form = new ClearForm("form", ".clearForm", "btn");
form.init();

let formDate: InvestmentSimulationForm;
let addGraphics: AddGraphics | null = null; // Armazena a instância para reaproveitamento

document.querySelector("#simulate")?.addEventListener("click", () => {
    formDate = getFormData();
    console.log(formDate);

    const simulate = new SimulateInvestment(formDate);
    const dates = {
        brute: simulate.init().brute,
        invested: simulate.init().Invested,
        profit: simulate.init().Profit,
        mySimulate: simulate.init().mySimulate,
    };

    // Se já houver uma instância de AddGraphics, reaproveite-a
    if (!addGraphics) {
        addGraphics = new AddGraphics(formDate);
    } else {
        addGraphics = new AddGraphics(formDate); // Atualiza com os novos dados
    }
    addGraphics.init();

    const newRender = new RenderPage(dates);
    newRender.init();

    document.querySelector("#downloadPdf")?.addEventListener("click", () => {
        gerarPDF();
    });
});
