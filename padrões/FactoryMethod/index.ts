interface veiculo{
  pegarClient(nomeClient:string):void;
  condutor(nomeCondutor:string):void;
}

class Carro implements veiculo{
  constructor(private nomeVeiculo){}
  
  pegarClient(nomeClient:string){
    console.log(`${nomeClient} bem vindo ao seu ${this.nomeVeiculo}`)
  }
  condutor(nomeCondutor:string){
      console.log(`${nomeCondutor} usando ${this.nomeVeiculo}`)
  }
}

abstract class FabricaAbstrata{
  abstract CriarNovoCarro(nomeVeiculo:string):veiculo;
}

class Fabrica extends FabricaAbstrata{
  
  CriarNovoCarro(nomeVeiculo){
    return new Carro(nomeVeiculo)
  }
}

const novoCarro = new Fabrica()
const fusca = novoCarro.CriarNovoCarro('Fusca')

fusca.pegarClient('Manuel')

