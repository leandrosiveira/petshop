// Obtendo o input pelo ID
const phoneInput = document.getElementById('tel');

// Adicionando o evento de input ao campo de telefone
phoneInput.addEventListener('input', (event) => {
  let input = event.target;
  input.value = phoneMask(input.value); // Aplica a máscara
});

// Função para aplicar a máscara no valor do telefone
const phoneMask = (value) => {
  if (!value) return ""; // Se não houver valor, retorna vazio
  value = value.replace(/\D/g, ''); // Remove tudo que não for número
  
  // Aplica a máscara: (XX) X XXXX-XXXX
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");

  return value;
};
