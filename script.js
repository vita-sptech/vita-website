function irSectionCase() {
    window.location.href = "./index.html#case";
}

function irSectionSaibaMais() {
    window.location.href = "./index.html#sobre";
}

function irSectionContato() {
    window.location.href = "./index.html#contato";
}

function irCase() {
    window.location.href = "#";
}

function contatar() {
    let nome_completo = document.getElementById("ipt_nome_completo").value;
    let email = document.getElementById("ipt_email").value;
    let cnpj_cpf = document.getElementById("ipt_cnpj_cpf").value;
    let produto = document.getElementById("select_product").value;
    let mensagem = document.getElementById("ipt_mensagem").value;

    if (!nome_completo || !email || !cnpj_cpf || !produto == 'none' || !mensagem) {
        Swal.fire(
            'Há campos incompletos',
            'Preencha todos os campos para prosseguir',
            'error'
        )
    } else {
        Swal.fire(
            'Enviado!',
            'Mensagem enviada com sucesso!',
            'success'
        )
    }
}