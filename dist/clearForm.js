export class ClearForm {
    form;
    btn;
    constructor(form, btn) {
        this.form = document.querySelector(form);
        this.btn = document.querySelector(btn);
    }
    init() {
        if (this.form && this.btn) {
            this.addEvent();
            this.preventSubmit();
        }
        else {
            console.error('Erro: Elemento não encontrado');
        }
    }
    preventSubmit() {
        this.form?.addEventListener('submit', (event) => {
            event.preventDefault();
        });
    }
    addEvent() {
        this.btn?.addEventListener('click', () => {
            this.form?.reset();
        });
    }
}
