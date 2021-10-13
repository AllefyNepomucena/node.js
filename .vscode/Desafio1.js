const Empresa = {
  nome : 'Rocketseat',
  cor : 'Roxo',
  foco :'Programaçao',
  Rua : 'Rua Guilherme Gembala',
  Numeiro : 260
}

const tec = [
  {
   nome : 'Tijon',
   idade : 20 ,
   tecnologia : 'JavaScript',
   especialidade : 'Web/Mobile'
 },
 {
     nome : 'Allefy',
     idade : 15,
     tecnologia : 'Python',
     especialidade : 'Data Sciencie'
 },
 {
     nome : 'geovane',
     idade : 16,
     tecnologia : 'C++'
 }
]
console.log(`A empresa ${Empresa.nome} se encontra na ${Empresa.Rua}, no numeiro
${Empresa.Numeiro}`)

console.log(`O usuario ${tec[0].nome}, tem ${tec[0].idade}, e usa tecnologia,${tec[0].tecnologia},com especialidade em${tec[0].especialidade}.`)

//correcão
const  usuario  =  {
  nome : 'Diego' ,
  empresa : {
      nome : "Rocketseat" ,
      cor : "roxo" ,
      foco : "Programação" ,
      endereco : {
          rua : "Rua Guilherme Gembala" ,
          numero : 260
      }
  }
}

console . log ( `A empresa $ { usuario . empresa . nome } está localizada em $ { usuario . empresa . endereco . rua } , $ { usuario . empresa . endereco . numero } ` )

const programador = {
  nome: "Mayk",
  idade: 35,
  tecnologias:  [
      { nome: 'JavaScript', especialidade: 'Desktop' }, 
      { nome: 'JavaScript', especialidade: 'Web/Mobile' }
  ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)
//