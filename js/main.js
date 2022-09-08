const pecas = {
    bracos: {
      forca: 29,
      poder: 35,
      energia: -21,
      velocidade: -5,
    },
  
    blindagem: {
      forca: 41,
      poder: 20,
      energia: 0,
      velocidade: -20,
    },
    nucleos: {
      forca: 0,
      poder: 7,
      energia: 48,
      velocidade: -24,
    },
    pernas: {
      forca: 27,
      poder: 21,
      energia: -32,
      velocidade: 42,
    },
    foguetes: {
      forca: 0,
      poder: 28,
      energia: 0,
      velocidade: -2,
    },
  };
  
const controle = document.querySelectorAll("[data-controle]");
const estatistica = document.querySelectorAll("[data-estatistica]");
  
controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode);
        atualizaEstatistica(evento.target.dataset.peca, evento.target.textContent);
    });
});
  
function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]");
  
    if (operacao === "-") {
        if (peca.value > 0) {
            peca.value = parseInt(peca.value) - 1;
        } else {
            peca.value = "00";
        }
    } else if (operacao === "+") {
        peca.value = parseInt(peca.value) + 1;
    }
}
  
function atualizaEstatistica(peca, operacao) {
    switch (operacao) {
        case "-":
            subtrairEstatisticas(peca);
        break;
        case "+":
            incrementarEstatisticas(peca);
        break;
    }
}
  
function incrementarEstatisticas(peca) {
    estatistica.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    });
}
  
function subtrairEstatisticas(peca) {
    estatistica.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
    });
}