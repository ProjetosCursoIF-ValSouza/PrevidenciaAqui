function Campo(p) {
    var campos = document.querySelectorAll('input, textarea');
    var campo = campos[p];
    var styleLabel;

    if (campo) {
        styleLabel = campo.parentElement.querySelector('label').style;
    } else {
        return;
    }

    if (campo.value !== "" || campo === document.activeElement) {
        styleLabel.fontSize = "15px";
        styleLabel.top = "-20px";
        styleLabel.color = "#000";
    } else {
        styleLabel.fontSize = "20px";
        styleLabel.top = "15px";
        styleLabel.left = "5px";
        styleLabel.color = "#fff";
    }
}

function mudarCor() {
    var input = document.getElementById("meu-input");
    
    if (input.value !== "") {
      input.style.backgroundColor = "#fff"; // Altere a cor para a desejada aqui
    } else {
      input.style.backgroundColor = ""; // Volta à cor padrão caso o input esteja vazio
    }
  }
  