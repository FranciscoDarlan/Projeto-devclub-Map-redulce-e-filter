//1° variaveis para forEach
let buttonMostrarTudo = document.querySelector('.show-all'); // button chamar função
let divCardapio = document.querySelector('.div-cardapio-complet'); // div que mostra as informações

//2° variaveis para MAP
let buttonMostraDesconto = document.querySelector('.show-Descount');

//3° variaveis para Redulce
let somaTudo = document.querySelector('.soma-tudo');


//na minha funcção de mostrar tudo tive que acicionar parametgro de infomação para poder usar no MAP!!
// O FOREACH SÓ FUNCIONA COM ARRAY !!!!!!!!!!!!1  
function MostrarTudoForEath(parametroDeInfomacoes) {
  let myDivCardapio = ''; //forEach precisa começar em uma variavel vazia..
// OBS: antes de iniciar a função ela vai esvaziar minha variavel e adicionar novamente, caso não faça isso vai acumular uma infomação deopis da outra!!!

  //essa é a estrutura do forEach, mas temos que colocar dentro
  //de uma função, se não vai ficar aparecendo direto na tela!!
  parametroDeInfomacoes.forEach((produt) => { // function que chama o forEach

    //essa
    myDivCardapio = myDivCardapio + `
        <div class="cardapio-individual">
          <img src=${produt.src} alt="imagem-comida">
          <p>${produt.name}</p>
          <p>R$R$${produt.price}</p>
          <a class="buttonComprarLanche" onclick="compraLanche()">COMPRAR</a>
        </div>
`
  })
  divCardapio.innerHTML = myDivCardapio;
}

//function do MAP
function mostrarDesconto() {

  //preciso criar uma variavel com novo valor apartir do array que ja tenho ...
  const newPrices = menuOptions.map((product) => ({

    //POSSO FAZER ASSIM, MAS VAI DAR MUITO CODIGO REPETIDO!!! TEM QUE USAR O SPREAD OPERATOR ...
   //  name: product.name,    //mantém o mesmo
   //  price: product.price * 0.95,  // esse valor que vou alterar
   //  vegan: product.vegan,  //mantém o mesmo
   //  src: product.src      //mantém o mesmo

    // para não ficar repetindo as propriedades que não vamos alterar existe o spread operator ...
    // que é os 3 pontinhos ( ... ) e depois colocamos valor do parametros
    // por exemplo no nosso código é (product)
    //ficaria assim : ...product,
    // e depois adiciono a propriedade e valor que quero alterar

      ...product,      // matém todo mundo e economiza linha!
      price: product.price * 0.95,   // esse valor que vou alterar
  }))


  //vou chamar a funcção que mostra tudo na tela .. com parametros!!!
  MostrarTudoForEath(newPrices);

} 


//function do REDUCE
function FunctionSomaTudo(){

  //aqui vou criar uma variavel para colocar o valor reduzido com reduce!!
  let totalValores = menuOptions.reduce((acc, atual) => acc + atual.price, 0);
                                                            //parametro+price
                                                            
  //aqui é a variavel pega pelo com querySelector + innnerHTML
    divCardapio.innerHTML = `

          <div class="cardapio-individual-soma">
            <p>A Soma dos Valores é R$ ${totalValores}</p>
          </div>
    `
}


//1° metodo forEach
//agora tenho que enviar os dado aqui para chegar os parametros la na minha funcção.. 
// a observação é que tenho que colocar um aerofunction antes da funcção para não iniciar direto!!!
buttonMostrarTudo.addEventListener('click', () => MostrarTudoForEath(menuOptions));

//2° metodo MAP
buttonMostraDesconto.addEventListener('click', mostrarDesconto);

//3° metodo REDULCE 
somaTudo.addEventListener('click', FunctionSomaTudo);