/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function teste (x) {
    return x === true ? true : false;
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
teste(0);
teste(false);
teste(-0);
teste("");
teste(NaN),
teste(null);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
teste(1);
teste("teste");
teste(true);
teste("x");
teste(2);
teste(6);
teste("false");
teste("0");
teste(9);
teste(10);

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
    Marca: "Fiat",
    Modelo: "Cronos",
    Placa: "MVQM0811",
    Ano: 2020,
    Cor: "Preto",
    quantasPortas: 4,
    Assentos: 5,
    quantidadePessoas: 0,
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(cor){
    carro.Cor = cor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function() {
    return carro.Cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function() {
    return carro.Modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function () {
    return carro.Marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function () {
    return "Esse carro é um" + " " + carro.obterMarca() + " " + carro.obterModelo()
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
var addPessoas = function (pessoas) {
    

    if( carro.quantidadePessoas == 5) {
        return "O carro já está lotado!";
}
    else if (pessoas + carro.quantidadePessoas > 5) {
        var full = 5 - carro.quantidadePessoas;
        var cabem = full == 1 ? "cabe" : "cabem";
        var pessoas = full == 1 ? "pessoa" : "pessoas";

        return "Só " + cabem + " " + "mais " + full + " " + pessoas + "!";

    }
    else {
        carro.quantidadePessoas += pessoas
        return "Já temos" +" " + carro.quantidadePessoas + " " + "pessoas no carro!";
    }
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.Cor
// Mude a cor do carro para vermelho.
carro.mudarCor("vermelho")

// E agora, qual a cor do carro?
vermelho;

// Mude a cor do carro para verde musgo.
carro.mudarCor("Verde Musgo")

// E agora, qual a cor do carro?
Verde Musgo;

// Qual a marca e modelo do carro?
carro.obterMarcaModelo();

// Adicione 2 pessoas no carro.
var addPessoas(2); // Já temos 2 pessoas no carro!

// Adicione mais 4 pessoas no carro.
var addPessoas(4); // Só cabem mais 3 pessoas!

// Faça o carro encher.
var addPessoas(3); // Já temos 5 pessoas no carro!
// Tire 4 pessoas do carro.
carro.quantidadePessoas = 1;

// Adicione 10 pessoas no carro.
?carro.adicionarPessoas(10); // Só cabem mais 4 pessoas!
 
// Quantas pessoas temos no carro?
carro.quantidadePessoas; // 1