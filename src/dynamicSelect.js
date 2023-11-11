import React, { useState } from 'react';


const DynamicSelect = () => {
    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');

    const options1 = ['Pernambuco',  'São Paulo', 'Alagoas', 'Bahia', 'Ceará','Paraíba', 'Rio de Janeiro' , 'Rio Grande do Norte', 'Rio Grande do Sul'];

    const options2 = {
        'Pernambuco': ['GS Shopping Recife', 'GS Tacaruna', 'GS Plaza', 'GS Guararapes', 'GS Shopping Riomar', 'GS Camará', 'GS Shopping Boa vista', 'GS Costa Dourada'],

        'São Paulo': ['GS Shopping Metrô Tucurivi', 'GS Shopping Boa vista SP', 'GS Shopping Granja Viana','AZE Shopping iguatemi Alphaville','AZE Shopping Butantã', 'AZE Shopping Campo Limpo','AZE Franca Shopping ', 'AZE Shopping Galleria ', 'AZE Jacarei Shopping ', 'AZE Shopping Mais Largo 13','AZE Mogi Shopping', 'AZE Osasco Plaza Shopping', 'AZE Super Shopping Osasco', 'AZE Shopping Parque das Bandeiras', 'AZE Shopping Plaza Sul', 'AZE Santana Parque Shopping', 'AZE Shopping Iguatemi Esplanada', 'AZE Shopping Tambore', 'AZE Shopping West Plaza ', 'AZE Gran Plaza Shopping (Bolix ABC Plaza)', 'AZE Shopping Internacional Guarulhos (Bolix Guarulhos) ', 'AZE Shopping Interlagos (Bolix Interlagos)', 'AZE Raposo Shopping (Bolix Raposo)', 'AZE SP Diversões'],

        
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
        setSelectedOption1(selectedValue);
        // Atualize as opções do segundo select com base em selectedValue
        // Use options2[selectedValue] para obter as opções correspondentes.
    };

    const handleSelect2Change = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption2(selectedValue);
    };

    return (





        <div className="" >

            <form class="was-validated ">
                <label className="form-label">Estado: </label>
                <select class="form-select" id="sel1" name="sellist1" value={selectedOption1} onChange={handleSelect1Change}  required>
                    <option value="" >Selecione...</option>
                    {options1.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}


                </select>

                <div className="valid-feedback">Valido.</div>
                <div className="invalid-feedback">Por favor, Selecione um Estado.</div>

                {selectedOption1 && (
                    <div >
                        <label className="form-label">Unidade GS:</label>
                        <select class="form-select" id="sel1" name="sellist1" value={selectedOption2} onChange={handleSelect2Change} required>
                            <option value="">Selecione...</option>
                            {options2[selectedOption1].map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>

                        <div className="valid-feedback">Valido.</div>
                        <div className="invalid-feedback">Por favor, Selecione o parque que você esta.</div>

                    </div>
                )}



            </form>
        </div>




    );
};

export default DynamicSelect;
