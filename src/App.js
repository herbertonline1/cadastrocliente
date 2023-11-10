
//Precisamos pegar o valor em cada campo digitado na nossa pagina pra isso temos que utlizar as useState
import { useState } from 'react'; 
//Importado o db que criamos e ja realizamos a exportação no firebaConnection.js
import { db } from './firebaseConnection';

// importar o doc e realizar alterações importando o fireStore
import {doc, setDoc} from 'firebase/firestore'
//Importando o app.css para estilização da pagina 
import './App.css';

function App() {
  //aqui ele lê e realizar alterações no titulo da pagina
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [unidade,setUnidade] = useState('');
  //temos que trasforma essa função em async
  async function handleAdd(){
   
    //Aqui Criamos um documento novo.
    await setDoc(doc(db , "tarefas", "12345"), {
      nome: nome,
      telefone: telefone,
      unidade: unidade
    })
    .then(() => {
      console.log("Dados registrados no banco")
    })

    .catch((error) => {
      console("Gerol erro " + error)

    })

  }
  
  return (
    <div>
      <h1>Tela de cadastro</h1>

      <div className="container">
        <label>Nome completo: </label>
        <textarea
          type="text"
          placeholder="Digite um titulo"
          //Aqui atribuimos o valor ao titulo
          value={nome}
          //Toda vez que digitar alguma tecla dentro de titulo ele vai disparar o onchange e vai colocar a informação dentro da useState  
          onChange={ (e) => setNome(e.target.value) }
        />
        <label>Tel:</label>
        <input type="number"
          placeholder="Autor do post"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value) }
        />



        <label>Unidade:</label>
        <input type="text"
          placeholder="Unidade"
          value={unidade}
          onChange={(e) => setUnidade(e.target.value) }
        />

        <button onClick={handleAdd}>Cadastrar!</button>
      </div>
    </div>
  );
}

export default App;
