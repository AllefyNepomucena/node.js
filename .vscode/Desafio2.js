const Dados = {
    nome : 'José',
    peso : 84,
    altura : 1.88
};

const IMC =  (Dados.peso / (Dados.altura * Dados.altura))

if(IMC >= 30)
 console.log(`${Dados.nome} vc está acima do peso `)

 else(IMC < 25)
  console.log(`${Dados.nome} vc não está acima do peso`)


//correcão
  const  nome  =  'Carlos'
   const peso  =  110
  const  altura  =  1.88

const  imc  =  peso  /  ( altura  *  altura )



if  ( imc  >= 30 )  {
    message  =  ` $ { nome } você está acima do peso`
}  
 else  {
    message  =  ` $ { nome } você não está acima do peso`
}

console . log ( mensagem )
//


const aposentar =[ 
      {
        nome : 'Silvana',
        sexo :'Feminino',
        idade : 48,
        contribuiçao:23 
        },
        {
        nome : 'Marcos',
        sexo : 'marculino',
        idade : 20,
        contribuiçao : 10
        }

]
  
  

const minimo = (aposentar[0,1].idade + aposentar[0,1].contribuiçao)

if(minimo > 85)
 if(minimo > 95)
 console.log (`${aposentar[0,1].nome} vc já pode se aponsentar`)

 else(minimo < 85)
  else(minimo < 95)
  console.log(`${aposentar[0,1].nome} vc não pode se aponsentar`)



  //correcão
  const  nome  =  'Silvana'
  const  sexo  =  'F'
  const  idade  =  48
  const  contribuicao  =  23
  
  const  calculoContribuicao  =  idade  +  contribuicao
  
  // essas variáveis ​​irão retornar verdadeiro ou falso
  //const  homemPodeAposentar  =  sexo  ==  'M'  &&  contribuicao  > =  35  &&  calculoContribuicao  > =  95
  //const  mulherPodeAposentar  =  sexo  ==  'F'  &&  contribuicao  > =  30  &&  calculoContribuicao  > =  85
  
  if  (  homemPodeAposentar  ||  mulherPodeAposentar )  {
      console . log ( ` $ { nome } , você pode se aposentar!` )
  }  else  {
      console . log ( ` $ { nome } , você não pode se aposentar!` )
  }
//