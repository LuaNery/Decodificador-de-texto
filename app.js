function verificarTexto(texto){
    // Verifica se o texto contém letras maiúsculas ou acentos
    const regexMaiusculasOuAcentos = /[A-ZÀ-ÿ]/;
    return !regexMaiusculasOuAcentos.test(texto);
}

function criptografar(){
    let texto = document.getElementById("caixaDeTexto").value;

    if(!verificarTexto(texto)){
        alert("O texto deve estar em letras minúsculas e não pode conter acentos.");
        return;
    }

    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("mensagem-container2").innerHTML = `
        <h2 id="nme">Texto Criptografado:</h2>
        <p id="paragrafo">${textoCriptografado}</p>
        <button class="btn-copiar" type="button" onclick="copiarTexto()">Copiar</button>
    `;
}

function descriptografar(){
    let texto = document.getElementById("caixaDeTexto").value;

    if (!verificarTexto(texto)){
        alert("O texto deve estar em letras minúsculas e não pode conter acentos.");
        return;
    }

    let textoDescriptografado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("mensagem-container2").innerHTML = `
        <h2 id="nme">Texto Descriptografado:</h2>
        <p id="paragrafo">${textoDescriptografado}</p>
        <button class="btn-copiar" type="button" onclick="copiarTexto()">Copiar</button>
    `;
}

function copiarTexto(){
    const paragrafo = document.getElementById("paragrafo");
    const texto = paragrafo.innerText;

    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado para a área de transferência!");
    }).catch(err => {
        console.error("Erro ao copiar texto: ", err);
    });
}