export class clearForm {
    form: HTMLFormElement | null;
    btn: HTMLElement | null;
    constructor(form: string, btn: string) {
        this.form = document.querySelector(form) as HTMLFormElement;
        this.btn = document.querySelector(btn);
    }
    init() {
        if (this.form && this.btn) {
            this.addEvent();
            this.preventSubmit()

        } else {
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
