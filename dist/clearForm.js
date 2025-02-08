export class clearForm {
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
        var _a;
        (_a = this.form) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', (event) => {
            event.preventDefault();
        });
    }
    addEvent() {
        var _a;
        (_a = this.btn) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            var _a;
            (_a = this.form) === null || _a === void 0 ? void 0 : _a.reset();
        });
    }
}
