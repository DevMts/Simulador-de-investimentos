export class Menu {
    constructor(menu, btn) {
        this.monitorScreenSize = () => {
            window.addEventListener('resize', () => {
                var _a, _b;
                if (window.innerWidth > 768) {
                    (_a = this.menu) === null || _a === void 0 ? void 0 : _a.classList.remove('on');
                    (_b = this.btn) === null || _b === void 0 ? void 0 : _b.classList.remove('on');
                }
            });
        };
        this.menu = document.querySelector(menu);
        this.btn = document.querySelector(btn);
    }
    init() {
        if (this.menu && this.btn) {
            this.addMenuEvent();
            this.monitorScreenSize();
        }
        else {
            console.error('Erro: Elemento não encontrado');
        }
    }
    addMenuEvent() {
        var _a;
        (_a = this.btn) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            var _a, _b;
            (_a = this.menu) === null || _a === void 0 ? void 0 : _a.classList.toggle('on');
            (_b = this.btn) === null || _b === void 0 ? void 0 : _b.classList.toggle('on');
        });
    }
}
