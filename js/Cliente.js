class Cliente{

    //Atributo da Classe - Acessível a todos os objetos do tipo Cliente
    static contadorCliente = 0; 

    //Atributos do objeto - Acessíveis apenas dentro do objeto
    #nome; 
    #cpf
    #rg
    #endereco
    #conta;

   //Método Construtor  
   constructor(nome, conta, cpf, rg, endereco){
       this.nome = nome;
       this.cpf = cpf; 
       this.rg = rg; 
       this.endereco = endereco; 
       this.conta = conta; 
       Cliente.contadorCliente++; //Observer que o atributo da classe contadorCliente é
                                  // acessível através do nome da classe...
   }

    //Métodos de acesso
    get nome(){
        return this.#nome;
    }

    set nome(nome){
        this.#nome = nome;  
    }

    get conta(){
        return this.#conta;
    }

    set conta(conta){
        this.#conta = conta; 
    }

    get cpf() {
        return this.#cpf
    }
    
    set cpf(cpf) {
        this.#cpf = cpf
    }

    get rg() {
        return this.#rg
    }
    
    set rg(rg) {
        this.#rg = rg
    }

    get endereco() {
        return this.#endereco
    }
    
    set endereco(endereco) {
        this.#endereco = endereco
    }
}