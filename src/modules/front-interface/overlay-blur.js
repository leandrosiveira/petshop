const new_schedule = document.getElementById('new-schedule')
const schedule = document.getElementById('schedule')
const to_schedule = document.getElementById('to-schedule')
const submit = document.querySelector('input[type="submit"]')
const close_X = document.querySelector('img[src="src/assets/icons/close.svg"]')

// console.log(close_X)

new_schedule.addEventListener("click", (event) => {
  event.preventDefault()
  schedule.classList.add("blur")
  new_schedule.classList.add("display-none")
  to_schedule.classList.remove("display-none")
})

submit.onsubmit = (event) => {
  event.preventDefault()
  console.log("vc submeteu")
}

close_X.onclick = () => {
  location.reload()
}

