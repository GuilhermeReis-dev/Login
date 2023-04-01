const firebaseConfig = {
    apiKey: "AIzaSyC8hjVYf6bM3NUpwYeuhQ9C8KK-6VQIWU8",
    authDomain: "login-6325e.firebaseapp.com",
    projectId: "login-6325e",
    storageBucket: "login-6325e.appspot.com",
    messagingSenderId: "964582135391",
    appId: "1:964582135391:web:96c54935858b109f296dea"
};
firebase.initializeApp(firebaseConfig);

const form = document.getElementById("formLogin");

$(form).submit(function(e) {
  e.preventDefault();
  const inputEmail = document.getElementById("input-email").value;
  
  firebase.auth().sendPasswordResetEmail(inputEmail)
    .then(() => {
      // Password reset email sent
      console.log("Enviado para", inputEmail);
      alert("Um email de redefinição de senha foi enviado para o endereço fornecido.");
      window.location.href = "login.html"
    })
    .catch((error) => {
      // Error sending password reset email
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Erro:", errorMessage, errorCode);
      alert("Houve um erro ao enviar o email de redefinição de senha. Por favor, verifique o endereço de email fornecido e tente novamente.");
      window.location.reload();
    });
});
