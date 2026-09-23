const buton = document.getElementById("submit-button");
buton.addEventListener("click", function(event) {
  event.preventDefault(); 

  const emailInput = document.getElementById("email");
  const email = emailInput.value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    console.log("O email é válido.");
  } else {
    console.log("O email é inválido.");
  }
});
