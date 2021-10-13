const usuarios =[
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
     
    function enviarmensagem (usuarios){
        for(let usuario of usuarios)
        {
          console.log(`O Usuario ${usuarios.nome} trabalha com ${usuarios.tecnoligias}`)
       
        }
    }
      for (let usuario of usuarios) {
        console.log(`${usuario.nome} trabalha com ${usuario.tecnologias}`)
      }

   
    

    

 