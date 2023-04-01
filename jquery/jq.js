// Mostrar e Esconder Senha 

function verSenha () {
  $('#iconSenha').css('background-image', 'url(../Login/IMG/view.png)');
  $('#input-senha').removeAttr('type');
}
  
function esconderSenha() {
  $('#iconSenha').css('background-image', 'url(../Login/IMG/hide.png)');
  $('#input-senha').attr('type', 'password');
}


$("#iconSenha").click(() => {
  $('#iconSenha, #input-senha').toggleClass("olho");
  
  if ($('#iconSenha').hasClass("olho")) {
    verSenha();
  }else {
    esconderSenha();
  }
});

// CapsLock ativo ou desativado
let senha = $("#input-senha");
let caps = $("#avisoCapsLock");
let capsLockAtivo = false;

// Dificil Internet
$(document).on("keydown", (e) => {
  if (e.originalEvent.getModifierState("CapsLock")) {
    capsLockAtivo = true;
    caps.show();
  }
});

$(document).on("keyup", (e) => {
  if (!e.originalEvent.getModifierState("CapsLock")) {
    capsLockAtivo = false;
    caps.hide();
  }
});
