export class Menu {
    menu;
    btn;
    constructor(menu, btn) {
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
        this.btn?.addEventListener('click', () => {
            this.menu?.classList.toggle('on');
            this.btn?.classList.toggle('on');
        });
    }
    monitorScreenSize = () => {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                this.menu?.classList.remove('on');
                this.btn?.classList.remove('on');
            }
        });
    };
}
