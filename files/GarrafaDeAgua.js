class GarrafaDeAgua {
    #capacidade
    #quantidade
    #aberta

    constructor(capacidade) {
        this.#capacidade = capacidade;
        this.#quantidade = 0;
        this.#aberta = false;
        //
    }
    
    
    beber() {
        if (this.#aberta) {
            if (this.#quantidade >= 200) {
                this.#quantidade -= 200;
                return "Bebendo 200ml de água...";
            } else if (this.#quantidade > 0) {
                const quantidadeBebida = this.#quantidade;
                this.#quantidade = 0;
                return `Bebendo ${quantidadeBebida}ml de água...`;
            } else {
                return "A garrafa está vazia";
            }
        } else {
            return "A garrafa está fechada";
        }
    }

    encher(quant) {
        if (this.#aberta) {
            const quantidadeRestante = this.#capacidade - this.#quantidade;
            if (quant <= quantidadeRestante) {
                this.#quantidade += quant;
                return `Enchendo a garrafa com ${quant}ml de água...`;
            } else {
                this.#quantidade = this.#capacidade;
                return `A garrafa está cheia, não é possível adicionar mais água.`;
                //
            }
        } else {
            return "A garrafa está fechada";
        }
    }
    abrirFechar() {
        if (!this.#aberta) {
            this.#aberta = true;
            return "A garrafa foi aberta";
            //
        } else {
            this.#aberta = false;
            return "A garrafa foi fechada";
            //
        }
    }

    get quantidade() {
        return this.#quantidade;
    }
    get aberta() {
        return this.#aberta;
    }
    get capacidade() {
        return this.#capacidade;
    }
}