export class ClearForm {
    form: HTMLFormElement | null;
    btn: HTMLElement | null;
    type: string;
    constructor(form: string, btn: string, type: string) {
        this.form = document.querySelector(form) as HTMLFormElement;
        this.btn = document.querySelector(btn);
        this.type = type.toLowerCase();
    }
    init() {
        switch (this.type) {
            case 'btn':
                if (this.form && this.btn) {
                    this.addEvent();
                    this.preventSubmit()

                } else {
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
