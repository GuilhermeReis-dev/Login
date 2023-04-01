// Seleciona o formulário pelo ID
const form = document.getElementById("formIndex")

// Inicializa o Firebase
firebase.initializeApp({
  apiKey: "AIzaSyC8hjVYf6bM3NUpwYeuhQ9C8KK-6VQIWU8",
  authDomain: "login-6325e.firebaseapp.com",
  projectId: "login-6325e",
  storageBucket: "login-6325e.appspot.com",
  messagingSenderId: "964582135391",
  appId: "1:964582135391:web:96c54935858b109f296dea"
});
const db = firebase.firestore();
const auth = firebase.auth();

// Seleciona a coleção "users"
const collectionRef = firebase.firestore().collection("users");

// Pegando os valore dos input e armazenando
$(form).submit(function (e) { 
  e.preventDefault();
  const inputName = document.getElementById("input-nome").value;
  const inputEmail = document.getElementById("input-email").value;
  const inputPassword = document.getElementById("input-senha").value;
  
  // Adiciona um novo documento na coleção "users"
  collectionRef.add({
    Nome: inputName,
    Email: inputEmail,
    Senha: inputPassword
  })
  .then(() => {
    console.log("Documento adicionado com sucesso!");

    // Redireciona para a página de login
    window.location.href = "login.html";
    
  })
  .catch((error) => {
    alert("Ocorreu um erro, Tente novamente mais tarde.")
    console.error("Erro ao adicionar documento: ", error);
  });

  // Auth 
  firebase.auth().createUserWithEmailAndPassword(inputEmail, inputPassword)
  .then(() => {
    console.log("Tudo certo");
    window.location.href = "login.html"
  })
  .catch((error) => {
    console.log(error);
  });
});