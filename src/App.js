//Projeto de validação e cadastro , utilizando o ReactJS , Firebase(Banco de dados) , github e netlify (Deploy )



//Precisamos pegar o valor em cada campo digitado na nossa pagina pra isso temos que utlizar as useState
import { useState } from 'react';

//Importando o db que criamos e ja realizamos a exportação no firebaConnection.js
import { db } from './firebaseConnection';

// importar o doc e realizar alterações importando o fireStore
import { doc, setDoc, collection, addDoc } from 'firebase/firestore'



//Importando o app.css para estilização da pagina 
import './App.css';

import Cadastro from './cadastro'

function App() {
  



  
  return (
    <div className="container p-5 my-1 border">
      
          <Cadastro />
          

    </div>
     
        

  



  );

 

}








export default App;
