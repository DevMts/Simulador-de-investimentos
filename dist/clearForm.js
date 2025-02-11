export class ClearForm {
    form;
    btn;
    type;
    constructor(form, btn, type) {
        this.form = document.querySelector(form);
        this.btn = document.querySelector(btn);
        this.type = type.toLowerCase();
    }
    init() {
        switch (this.type) {
            case 'btn':
                if (this.form && this.btn) {
                    this.addEvent();
                    this.preventSubmit();
                }
                else {
                    console.error('Erro: Elemento não encontrado');
                }
            case 'form':
                if (this.form) {
                    this.form?.reset();
                }
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
