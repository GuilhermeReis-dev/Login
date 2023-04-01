// Seleciona o formulário pelo ID
let form = document.getElementById("formLogin")

// Inicializa o Firebase
firebase.initializeApp({
    apiKey: "AIzaSyC8hjVYf6bM3NUpwYeuhQ9C8KK-6VQIWU8",
    authDomain: "login-6325e.firebaseapp.com",
    projectId: "login-6325e",
    storageBucket: "login-6325e.appspot.com",
    messagingSenderId: "964582135391",
    appId: "1:964582135391:web:96c54935858b109f296dea"
});
let db = firebase.firestore();
const auth = firebase.auth();


//Logando usuario 
$(form).submit(function (e) { 
    e.preventDefault();
    const inputEmail = document.getElementById("input-email").value
    const inputPassword = document.getElementById("input-senha").value

    //Verificando o usuario
    firebase.auth().signInWithEmailAndPassword(inputEmail, inputPassword)
  .then(() => {
    console.log("Tudo certo");
    window.location.href = "node.html"
    
  })
  .catch((error) => {
    alert("Email ou senha incorreto")
    window.location.reload();
    console.log(error);
  });

});
