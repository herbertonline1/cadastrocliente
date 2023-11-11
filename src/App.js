//Projeto de validação e cadastro , utilizando o ReactJS , Firebase(Banco de dados) , github e netlify (Deploy )



//Precisamos pegar o valor em cada campo digitado na nossa pagina pra isso temos que utlizar as useState
import { useState } from 'react';

//Importando o db que criamos e ja realizamos a exportação no firebaConnection.js
import { db } from './firebaseConnection';

// importar o doc e realizar alterações importando o fireStore
import { doc, setDoc, collection, addDoc } from 'firebase/firestore'

import './dynamicSelect'

//Importando o app.css para estilização da pagina 
import './App.css';
import DynamicSelect from './dynamicSelect';

function App() {
  //aqui ele lê e realizar alterações no titulo da pagina
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [unidade, setUnidade] = useState('');
  const [estado, setEstado] = useState('');
 




  //temos que trasforma essa função em async
  async function handleAdd() {

    //Aqui Criamos um documento novo.
    //await setDoc(doc(db , "tarefas", "12345" ), {
    //nome: nome,
    //telefone: telefone,
    // unidade: unidade
    //})
    //.then(() => {
    //alert ("Dados registrados no banco")
    //})

    //.catch((error) => {
    // alert("Gerol erro " + error)
    // })



    await addDoc(collection(db, "dados"), {
      nome: nome,
      telefone: telefone,
      estado: estado,
      unidade: unidade,

     

    })

      .then(() => {
        console.log("Cadastradocom sucesso")
        setNome('');
        setTelefone('');
        setEstado('');
        setUnidade('');
        
       

      })

      .catch((error) => {
        alert("Gerol erro " + error)

      })



  }
  return (



    <div className="container p-5 my-1 border">




      <div >
      <img src="gamestations.jpeg" class="rounded-circle" alt="Cinque Terre" width="250" height="250"/> 
        <h3>Formulario</h3>
        <p>Preencha todos os campos.</p>

        <form className="was-validated">
          <div className="mb-3 mt-3">
            <label for="uname" className="form-label">Nome:</label>
            <input type="text" className="form-control" placeholder="Nome completo" value={nome} onChange={(e) => setNome(e.target.value)} required />
            <div className="valid-feedback">Valido.</div>
            <div className="invalid-feedback">Por favor, preencha este campo.</div>
          </div>
          <div className=" mb-3 mt-3">
            <label for="tel" className="form-label">Telefone:</label>
            <input type="number" className="form-control" placeholder="(DDD) 00000-0000" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
            <div className="valid-feedback">Valido.</div>
            <div className="invalid-feedback">Por favor, preencha este campo.</div>

          </div>







          <DynamicSelect />

          <div class="form-check mb-3 mt-3">
            <input class="form-check-input" type="checkbox" id="myCheck" name="remember" required />
            <label class="form-check-label" for="myCheck">Siga nossa pagina no instagram.</label>
            <div class="valid-feedback">Valido.</div>
            <div class="invalid-feedback">Marque essa opção para continuar.</div>
            
           

         
           

          </div>
         

         
          
         


        </form>

        

      </div>
      <a href="https://www.instagram.com/oficialgamestation/" target='blank'> <button type="submit" onClick={handleAdd} class="btn btn-primary"  >Cadastrar</button></a>
     
    </div>

  );



}





export default App;
