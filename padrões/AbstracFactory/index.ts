interface cliente{
  nomeClient:string;
}

interface produtos{
  nomeProduto: string;
  comprar():void;
}

class NossoClientesEmpresa implements cliente{
  constructor(public nomeClient:string){ }
  
  client(){
    console.log(`${this.nomeClient} bem vindo a nossa Empresa`)
  }
  
}

class NossoClientesCantina implements cliente{
  constructor(public nomeClient:string){ }
  
  client(){
    console.log(`${this.nomeClient} bem vindo a nossa Cantina`)
  }
}


class NossoProdutosEmpresa implements produtos{
  constructor(public nomeProduto:string){ }
  comprar(){
    console.log(`${this.nomeProduto} está custar 1.000.000 kz`)
  }
}

class NossoProdutosCantina implements produtos{
  constructor(public nomeProduto:string){ }
  comprar(){
    console.log(`${this.nomeProduto} está custar 1.000 kz`)
  }
}

abstract class FabricaAbstracta{
  abstract criarClientes(nome:string):cliente;
  abstract criarProduto(nome:string):produtos;
}

class FabricaEmpresarial extends FabricaAbstracta{
  criarClientes(nameClient: string){
      return new NossoClientesEmpresa(nameClient)
  }
  criarProduto(nomeProduto:string){
    return new NossoProdutosEmpresa(nomeProduto)
  }
}

class FabricaBAIRRO extends FabricaAbstracta{
  criarClientes(nameClient: string){
      return new NossoClientesCantina(nameClient)
  }
  criarProduto(nomeProduto:string){
    return new NossoProdutosCantina(nomeProduto)
  }
}

const fabricaEmpresarial = new FabricaEmpresarial()
const fabricaBAIRRO = new FabricaBAIRRO()

const empresa = fabricaEmpresarial.criarClientes('Manuel')
empresa.client()

const bairro = fabricaBAIRRO.criarClientes('Mestre Davi')
bairro.client()

