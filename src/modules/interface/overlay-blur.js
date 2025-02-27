const new_schedule = document.getElementById('new-schedule')
const schedule = document.getElementById('schedule')
const to_schedule = document.getElementById('to-schedule')
const close_X = document.querySelector('img[src="src/assets/icons/close.svg"]')
const name_tutor = document.getElementById('name-tutor')

// console.log(close_X)

new_schedule.addEventListener("click", (event) => {
  event.preventDefault()
  schedule.classList.add("blur")
  new_schedule.classList.add("display-none")
  to_schedule.classList.remove("display-none")
  name_tutor.focus()
  
  to_schedule.scrollTop = 0;
})

close_X.onclick = () => {
  location.reload()
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    console.log("esc clicado")
    event.preventDefault();  // Impede comportamento padrão
    location.reload();  // Recarrega a página
  }
});
