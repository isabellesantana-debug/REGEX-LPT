const telefone = "(67) 99999-9999";

const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
if (regex.test(telefone)) {
    console.log(" Telefone é válido.");
} else {
    console.log(" Telefone é inválido.");
}

/*
const telefone1 = "(67) 99999-9999";
const telefone2 = "1234";
const regexTelefone = /^\(\d{2}\) \d{5}-\d{4}$/;
console.log(regexTelefone.test(telefone1)); // true 
console.log(regexTelefone.test(telefone2)); // false
*/