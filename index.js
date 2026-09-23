const email = "aluno@email.com";

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (regex.test(email)) {
  console.log("O email é válido.");
} else {
  console.log("O email é inválido.");
}   
const regexTelefone = / ^\d{11}$/;
