const express = require('express')
const app = express()
const port = 3030

app.use(express.json ())

//cria o endpoind patch 

app.patch ("/api/auth/password", (req, res) => {

//que pede um objeto na resposta 

    const { password, confirmacaoPassword } = req.body;

//verifica se a password e a confirmaçãoPassword são iguais

//se a password e a confirmação não são iguais
    if (password !== confirmacaoPassword) {
//a resposta foi solicitada em objeto

        const resposta= {
          forca: 0,
          valida: false
        };

//retorna que a resposta as passwords não coincidem 
        return res.status(200).json(resposta);
      }

// cria variaveis para guardar: maiuscula, minuscula, numeros e comprimento da password

      let maiuscula = 0;
      let minuscula = 0;
      let numeros = 0;
      let comprimento = password.length;

//verificar se password tem maiuscula, miniscula, numero

//percorre o comprimento da password
      for (let i = 0; i <= password.length; i++) {


//usa o metodo includes para verificar se a string tem alguma destas condições 
        const letra = password[i];


        if (/[A-Z]/.includes(letra)) { //pass tem letra maiuscula?
          maiuscula = 1;
        }
        if (/[a-z]/.includes(letra)) { //pass tem letra minuscula?
          minuscula = 1;
        }
        if (/[0-9]/.includes(letra)) { //pass tem um numero?
          numeros = 1;
        }
      }
//verifica a força da palavra

      const forca = maiuscula + minuscula + numeros + Number(comprimento >= 8) + 1;
      const valida = forca >= 4;

      //retorna um objecto que valida a força da password

      const passForte = {
        forca: forca,
        valida: valida
      };
    
      res.status(200).json(passForte);
    });
    

app. listen (port, () =>{
    console.log('Listening on port ${port}')
})