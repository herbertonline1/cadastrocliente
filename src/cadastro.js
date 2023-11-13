//Projeto de validação e cadastro , utilizando o ReactJS , Firebase(Banco de dados) , github e netlify (Deploy )



//Precisamos pegar o valor em cada campo digitado na nossa pagina pra isso temos que utlizar as useState
import { useState } from 'react';

//Importando o db que criamos e ja realizamos a exportação no firebaConnection.js
import { db } from './firebaseConnection';

// importar o doc e realizar alterações importando o fireStore
import { doc, setDoc, collection, addDoc } from 'firebase/firestore'



//Importando o app.css para estilização da pagina 
import './App.css';




function Cadastro() {
    //aqui ele lê e realizar alterações no titulo da pagina
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [unidade, setUnidade] = useState('');
    const [estado, setEstado] = useState('');

    const options1 = ['Pernambuco', 'São Paulo', 'Alagoas', 'Bahia', 'Ceará', 'Paraíba', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul'];

    const options2 = {
        'Pernambuco': ['GS Shopping Recife', 'GS Tacaruna', 'GS Plaza', 'GS Guararapes', 'GS Shopping Riomar', 'GS Camará', 'GS Shopping Boa vista', 'GS Costa Dourada'],

        'São Paulo': ['GS Shopping Metrô Tucurivi', 'GS Shopping Boa vista SP', 'GS Shopping Granja Viana', 'AZE Shopping iguatemi Alphaville', 'AZE Shopping Butantã', 'AZE Shopping Campo Limpo', 'AZE Franca Shopping ', 'AZE Shopping Galleria ', 'AZE Jacarei Shopping ', 'AZE Shopping Mais Largo 13', 'AZE Mogi Shopping', 'AZE Osasco Plaza Shopping', 'AZE Super Shopping Osasco', 'AZE Shopping Parque das Bandeiras', 'AZE Shopping Plaza Sul', 'AZE Santana Parque Shopping', 'AZE Shopping Iguatemi Esplanada', 'AZE Shopping Tambore', 'AZE Shopping West Plaza ', 'AZE Gran Plaza Shopping (Bolix ABC Plaza)', 'AZE Shopping Internacional Guarulhos (Bolix Guarulhos) ', 'AZE Shopping Interlagos (Bolix Interlagos)', 'AZE Raposo Shopping (Bolix Raposo)', 'AZE SP Diversões'],


        'Alagoas': ['GS Maceió Shopping', 'GS Pátio Maceió'],


        'Bahia': ['GS Paralela', 'GS Bela Vista', 'GS Salvador Shopping', 'GS Salvador Norte shopping', ''],


        'Ceará': ['GS Riomar Fortaleza', 'AZE Shopping Parangaba', 'AZE North Shopping Jóquei ', 'AZE North Shopping - Fortaleza'],


        'Paraíba': ['GS Partage', 'GS Manaira', 'GS Mangabeira'],


        'Rio de Janeiro': ['AZE Shopping Grande Rio', 'AZE Shopping Metropolitano Barra', 'Shopping Nova Iguaçu', ''],


        'Rio Grande do Norte': ['GS Midway mall', 'GS Natal Shopping'],


        'Rio Grande do Sul': ['AZE Shopping Total - Porto Alegre'],

    };


    const handleSelect1Change = (event) => {
        const selectedValue = event.target.value;
        setEstado(selectedValue);
        // Atualize as opções do segundo select com base em selectedValue
        // Use options2[selectedValue] para obter as opções correspondentes.
    };

    const handleSelect2Change = (event) => {
        const selectedValue = event.target.value;
        setUnidade(selectedValue);
    };

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
                console.log("")
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



        <div className="">




            <div >
                <img src="gamestations.jpeg" class="rounded-circle" alt="Cinque Terre" width="250" height="250" />
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








                    <label className="form-label">Estado: </label>
                    <select class="form-select" id="sel1" name="sellist1" value={estado} onChange={handleSelect1Change} required>
                        <option value="" >Selecione...</option>
                        {options1.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}


                    </select>

                    <div className="valid-feedback">Valido.</div>
                    <div className="invalid-feedback">Por favor, Selecione um Estado.</div>

                    {estado && (
                        <div >
                            <label className="form-label">Unidade GS:</label>
                            <select class="form-select" id="sel1" name="sellist1" value={unidade} onChange={handleSelect2Change} required>
                                <option value="">Selecione...</option>
                                {options2[estado].map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>

                            <div className="valid-feedback">Valido.</div>
                            <div className="invalid-feedback">Por favor, Selecione o parque que você esta.</div>

                        </div>
                    )}

                    <div class="form-check mb-3 mt-3">
                        <input class="form-check-input" type="checkbox" id="myCheck" name="remember" required />
                        <label class="form-check-label" for="myCheck">Siga nossa pagina no instagram.</label>
                        <div class="valid-feedback">Valido.</div>
                        <div class="invalid-feedback">Marque essa opção para continuar.</div>
                    </div>

                    
                    
                    
                    
               
               
               
                </form>

                <a href="https://www.instagram.com/oficialgamestation/"target='blank' > <button type="submit" onClick={handleAdd} class="btn btn-primary"  >Cadastrar</button></a>
            </div>

           
        </div>




    );




}





export default Cadastro;