class Banco {
    #nome
    #cnpj
    #agencia
    #cliente = []

    constructor(nome, cnpj, agencia) {
        this.nome = nome
        this.cnpj = cnpj
        this.agencia = agencia
        
    }

    get nome() {
        return this.#nome
    }
    
    set nome(nome) {
        this.#nome = nome
    }

    get cnpj() {
        return this.#cnpj
    }
    
    set cnpj(cnpj) {
        this.#cnpj = cnpj
    }

    get agencia() {
        return this.#agencia
    }
    
    set agencia(agencia) {
        this.#agencia = agencia
    }

    get cliente() {
        return this.#cliente
    }

    set cliente(cliente) {
        this.#cliente = cliente
    }

    adicionaClientes(cliente) {
        this.#cliente.push(cliente)
    }

    getCliente(codCliente) {
        if (codCliente >= 0 && codCliente < this.#cliente.length) {
            return this.#cliente[codCliente]
        }
    }

}