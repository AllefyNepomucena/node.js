
 const usuario =[
    {
      nome : 'Tijon',
      tecnoligias : ['JavaScript', 'CSS']
    },
    {
      nome : ' Allefy',
      tecnoligias : ['HTML', 'CSS']
    },
    {
      nome : 'Geovane',
      tecnoligias : ['HTML', 'Node.js']
    }
    ]

    function checarUsuarioCSS(usuario){
      for(let tecnologia of usuario.tecnoligias){

        if(tecnologia ==='CSS')
  
          return true
  
          }
       
          return false
    }
      
    for (let i = 0; i < usuario.length; i++) {
      const usuarioTrabalhaComCSS = checarUsuarioCSS(usuario[i])
    
      if(usuarioTrabalhaComCSS) {
          console.log(`O usuário ${usuario[i].nome} trabalha com CSS`)
      }
    
    }
    
    const usuarios = [
      {
        nome : 'Salvio',
        receitas : [115.3, 48.7, 98.3, 14.5],
        despesas : [85.3, 13.5, 19.9]
      },
      {
        nome : 'Marcio',
        receitas : [24.6, 214.3, 45.3],
        despesas : [185.3, 12.1, 120.0]
      },
      {
        nome : 'Lucia',
        receitas : [9.8, 120.3, 340.2, 45.3],
        despesas : [450.2, 29.9]
      }
    ]

    function calculasaldo(receitas,despesas){
       const somaReceita= somaNumeiros(receitas)
       const somaDespesas= somaNumeiros(despesas)

       return somaDespesas - somaReceita
      }


    function somaNumeiros (numeiros){
      let soma = 0
     
      for(let numeiro of numeiros){
        soma = soma + numeiros
      }
       return soma
    }
   
  
    for(let usuario of usuarios){
      const saldo = calculasaldo(usuarios.receitas,usuarios.despesas)
  

 
      if( saldo > 0){
      console.log( `${usuarios.nome} Possui o saldo POSSITIVO de ${saldo}`)
      }
       else {
        console.log(`${usuarios.nome} Possui o saldo NEGATIVO de ${saldo}`)
      }
    
  }
 
    
 



 