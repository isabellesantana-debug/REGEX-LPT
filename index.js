const email = "aluno@email.com";

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (regexEmail.test(email)) {
  console.log("O email é válido.");
} else {
  console.log("O email é inválido.");
}   
/^\d{11}$/