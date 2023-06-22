let formulario = document.querySelector("form")

const checkInputs = (nome, telefone, email) => {

    if (nome.value.trim() == "") {
        nome.classList.add("Erro");
    }
    if (telefone.value.trim() == "") {
        telefone.classList.add("Erro");
    }
    if (email.value.trim() == "") {
        email.classList.add("Erro");
    }
};

formulario.addEventListener("submit", () => {

    let nome = document.querySelector("#nome").value;
    let telefone = document.querySelector("#telefone").value;
    let email = document.querySelector("#email").value;
    let renda = document.querySelector("input[type='radio']:checked").value;
    let residencia = document.querySelector("#residencia");
    let opcaoResidencia = residencia.options[residencia.selectedIndex].value;
    let intencao = document.querySelector("#intencao").value;

    if (checkInputs(nome, telefone, email)) {
        event.preventDefault();
    } else {
        const adotante = {
            id: 1,
            nome: nome.value,
            telefone: telefone.value,
            renda: renda.value,
            residencia: opcaoResidencia,
        };
    }
});
