const amigosdaTurmaA = [
    {
      nome: 'gabriel',
      nota: 10
    },
    {
      nome: 'allefy',
      nota: 9
    },
    {
      nome: 'geovane',
      nota: 8
    },
    {
      nome: 'alice',
      nota: 2.5
  
    }
  ]
  const amigosdaTurmaB = [
    {
      nome: 'vaca',
      nota: 7
    },
    {
      nome: 'zangado',
      nota: 2
    },
    {
      nome: 'felipe',
      nota: 5
    },
    {
      nome: 'fulano',
      nota: 5
    }
  ]
  
  function calculamedia(amigos) {
    let soma = 0
    for (let i = 0; i < amigos.length; i++) {
      soma = soma + amigos[i].nota
    }
    const media = soma / amigos.length
    return media
  }
  
  function enviamensagem(media, turma) {
    if (media > 5) {
      console.log(`A media da ${turma} foi de ${media}. parabéns`)
  
    } else {
      console.log('a nota foi muito baixa')
    }
     console.log(media)
  }
  
  
  function marcarcomoReprovado(amigo) {
    amigo.reprovado = false
  
    if (amigo.nota < 5) {
      amigo.reprovado = true;
    }
  }
  
  function enviarmensagem(amigo) {
    if (amigo.reprovado) {
      console.log(`O aluno ${amigo.nome} está reprovado`)
    }
  }
  
  function amigoReprovado(amigos) {
    for (let amigo of amigos) {
      marcarcomoReprovado(amigo)
      enviarmensagem(amigo)
    }
  }
  
  const media1 = calculamedia(amigosdaTurmaA)
  const media2 = calculamedia(amigosdaTurmaB)
  
  amigosReprovado(amigosdaTurmaA)
  amigosReprovado(amigosdaTurmaB)
  
  enviamensagem(media1, 'turmaA')
  enviamensagem(media2, 'turmaB')