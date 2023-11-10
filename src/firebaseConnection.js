// No firebase connection esta as iformações do projeto criado no firebase.

// Aqui realizamos a importação e a inicialização  do firebase/app e colocamos initializeApp para iniciar
import { initializeApp } from 'firebase/app'

//Aqui importamos o getFirestore para termos comunicação com o que vamos utilizar , no caso é o firebase/firestore e passamos o getFirestore : ele vai pegar as informações do baco firestore
import  {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCcHc8uaj7TH9yBHbfU83rqUAT8bfUALi8",
    authDomain: "curso-d7682.firebaseapp.com",
    projectId: "curso-d7682",
    storageBucket: "curso-d7682.appspot.com",
    messagingSenderId: "56158605264",
    appId: "1:56158605264:web:64e4370fc7da95baec73d5",
    measurementId: "G-SVB9YLCKN0"
  };


//Agora precisamos inicializar o nosso App e as configurações.

const firebaseApp = initializeApp(firebaseConfig);

// Agora precisamos passar a CONFIGURAÇÃO para serem inicializadas
const db = getFirestore(firebaseApp);

export { db };
